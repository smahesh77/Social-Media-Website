import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Reg() {
  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:4000/user/register", data).then((response) => {
      console.log(data);
      alert("user created")
      if (response.data.error) {  
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        
      }
    });
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="name" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="name"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />
          <br></br>

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Reg;
