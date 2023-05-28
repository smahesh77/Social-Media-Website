import React from "react";
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from "formik"; // for forms
import * as yup from "yup"; //for validation
import {useNavigate} from "react-router-dom";
import "./Rightbar.css";

function CreatePost() {
  let navigate = useNavigate();
  const initialValues = {
    title: "",
    desct: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("https://sochub.onrender.com/posts/create", data).then((response) => {
      // sends the data to server
      if (response.data.error) {
        alert("You are not Authorized, please log in!");
        navigate("/log");
      } else {
        console.log(response.data);
        console.log("IT WORKS");
        navigate("/");
      }
    });
  };

  const validationSchema = yup.object().shape({
    // basically checks for stuff like pass too weak name too small valid gmail stuff like that
    title: yup.string().required(), // enter your custom error messges inside the required
    postText: yup.string().required(),
    username: yup
      .string()
      .required("Enter your name")
      .min(3, "Minimum 4 characters")
      .max(15, "Maximum length exceeded"),
  });

  return (
    <div className="createPostPage mt-7 ml-6 mr-6">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="title"
              >
                Title
              </label>
              <Field
                id="inputCreatePost"
                name="title"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="title"
                placeholder="Enter the title of your post"
              />{" "}
              {/* thw title postText and username has the exactly same as that of the sql model only then the data could be send*/}
              <ErrorMessage
                className="error text-red-500 text-xs italic"
                name="title"
                component="span"
              />
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="post"
              >
                Post
              </label>
              <Field
                id="inputCreatePost"
                name="desc"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="desc"
                placeholder="Content of your post"
              />
              <ErrorMessage
                className="error text-red-500 text-xs italic"
                name="desc"
                component="span"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Image
              </label>
              <Field
                id="inputCreatePost"
                name="imageUrl"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="imageUrl"
                placeholder="Image URL"
              />
              <ErrorMessage
                className="error text-red-500 text-xs italic"
                name="imageUrl"
                component="span"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Date
              </label>
              <Field
                id="inputCreatePost"
                name="username"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
              />
              <ErrorMessage
                className="error text-red-500 text-xs italic"
                name="date"
                component="span"
              />
            </div>
          </div>
          <br />

          <div className="mb-5 flex justify-center drop-shadow-lg">
            <button
              className="bg-blue-900 flex justify-center p-3 pl-8 pr-8 m-2 rounded-full"
              type="submit"
            >
              <p className=" text-1.5xl text-white">Create Post</p>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
