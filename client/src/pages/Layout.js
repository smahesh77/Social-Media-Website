import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Layout() {
  // return (

  const [listOfPosts, setListOfPosts] = useState([]); // gets the data from server in useEffect and stores in into list of posts
  let navigate = useNavigate(); // exactly like navigator
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data); // this will somehow send the data to listpost, dw about it now
    });
  }, []);
  // to make the new blogs come first
  const reversedPosts = [...listOfPosts].reverse(); //value will go through each object in the list
  return (
    <>
      <div>
        <h1>Layout</h1>
        <p>This is main page</p>
        <div>
          {reversedPosts.map((value, key) => {
            return (
              <div
                className="post"
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                {/**navigator.push (where you want to go the route) the route must be specified*/}
                <div className="title"> {value.title} </div>
                <div className="body">{value.postText}</div>
                <div className="footer">{value.username}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Layout;
