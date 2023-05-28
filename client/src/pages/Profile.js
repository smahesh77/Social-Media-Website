import React from "react";
import axios from "axios";

function Profile() {
  return (
    <>
      <div className="realtive">
        <img
          className=" top-0 left-0 rounded-none w-full h-auto"
          src="https://images.unsplash.com/photo-1598512199776-e0747530204a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80"
          alt="bg"
        ></img>
        <img
          className="-mt-12 ml-12 w-lg rounded-full "
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="profile"
        ></img>
      </div>
      <div className="ml-5 mr-5 mt-3 ">
        <h1>Name</h1>
        <h1>About: </h1>
        <p>Whatever else has to rendered here</p>
      </div>
    </>
  );
}

export default Profile;
