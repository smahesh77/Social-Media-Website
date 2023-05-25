import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:4000/user/login", data).then((response) => {
      console.log("stuff")
      if (response.data.error) {  
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        alert("user logged in")
        console.log(data)
        navigate('/')
      }
    }).catch((err) => {
      console.log("failed")
      alert("failed")
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer2">
          <label>Username: </label>
          <ErrorMessage name="name" component="span" />
          <Field
            autocomplete="off"
            id="login"
            name="name"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            type="password"
            id="login"
            name="password"
            placeholder="Your Password..."
          />
          <br></br>
          <button type="submit"> Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
