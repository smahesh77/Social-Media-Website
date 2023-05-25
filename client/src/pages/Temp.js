// import React, {useState} from "react";
// import {Formik, Form, Field, ErrorMessage} from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// function Temp() {
//   return (
//     <section className="bg-white h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
//           <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
//             <h2 className="text-3xl font-bold font-display leading-tight text-black sm:text-4xl">
//               Login Now
//             </h2>
//             <p className="mt-2 text-base mr-2 text-gray-600">
//               Don't have an account? Sign up
//             </p>
//             <Formik
//               initialValues={initialValues}
//               onSubmit={onSubmit}
//               validationSchema={validationSchema}
//             >
//               <Form className="formContainer2">
//                 <form className="mt-8">
//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-base font-medium font-body text-gray-900">
//                         Username
//                       </label>
//                       <ErrorMessage name="name" component="span" />
//                       <div className="mt-2.5">
//                         <input
//                           required
//                           id="login"
//                           type="Username"
//                           name="name"
//                           placeholder="Enter Username"
//                           className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <div className="flex items-center justify-between">
//                         <label className="text-base font-medium font-body text-gray-900">
//                           Password
//                         </label>
//                         <ErrorMessage name="password" component="span" />
//                       </div>
//                       <div className="mt-2.5">
//                         <input
//                           required
//                           type="password"
//                           id="login"
//                           name="password"
//                           placeholder="Password"
//                           className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       className="inline-flex font-body items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               </Form>
//             </Formik>

//             <div className="mt-3 space-y-3"></div>
//           </div>
//         </div>

//         <div className="flex h-screen items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
//           <div>
//             <img className="w-full mx-auto" src="/images/doctor.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Temp;
