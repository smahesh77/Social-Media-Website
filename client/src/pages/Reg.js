import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Reg() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/user/register", data).then((response) => {
      console.log(data);

      if (response.data.error) {
        alert(response.data.error);
      } else {
        //localStorage.setItem("accessToken", response.data.token);
        alert("User Created");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <section className="bg-white h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold font-display leading-tight text-black sm:text-4xl">
                Sign Up
              </h2>
              <p className="mt-2 text-base mr-2 text-gray-600">
                Already have an account?
                <Link to="/login"> Log In</Link>
              </p>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className="formContainer">
                  <div className="mt-8">
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center justify-between">
                          <label className="text-base font-medium font-body text-gray-900">
                            Username
                          </label>
                          <ErrorMessage
                            name="name"
                            component="span"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mt-2.5 ">
                          <Field
                            required
                            id="inputCreatePost"
                            type="Username"
                            name="name"
                            placeholder="Enter Username"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label className="text-base font-medium font-body text-gray-900">
                            Password
                          </label>
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                        <div className="mt-2.5">
                          <Field
                            required
                            type="password"
                            id="inputCreatePost"
                            name="password"
                            placeholder="Password"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex font-body items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>

              <div className="mt-3 space-y-3"></div>
            </div>
          </div>

          <div className="flex h-screen overflow-hidden bg-white rounded drop-shadow-xl">
            <div className="m-auto">
              <img
                className="h-auto w-full max-h-screen rounded-lg transition-shadow"
                src="https://images.unsplash.com/photo-1530047139082-5435ca3c4614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTA5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reg;
