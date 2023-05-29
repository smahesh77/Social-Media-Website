import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Layout() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [user, setuser] = useState();
  let navigate = useNavigate();
  let url;

  useEffect(() => {
    axios.get("https://sochub.onrender.com/posts").then((response) => {
      setListOfPosts(response.data.posts);
      console.log(response.data.posts);
    });
  }, []);

  const reversedPosts = [...listOfPosts].reverse();

  return (
    <>
      <div className="ml-5 mr-5 mt-5">
        <div className="mb-5 flex justify-center drop-shadow-lg">
          <button
            className="bg-blue-900 flex justify-center p-3 pl-8 pr-8 m-2 rounded-full"
            onClick={() => navigate("/posts/create")}
          >
            <p className=" text-1.5xl text-white">Add Post</p>
          </button>
        </div>

        <div>
          {reversedPosts.map((value, key) => {
            return (
              <div
                className="post mt-2 mb-3"
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                <div className="overflow-hidden bg-white rounded drop-shadow-xl">
                  <img
                    className="post-image h-auto w-full max-h-56 rounded-lg transition-shadow"
                    src={`${value.imageUrl}`}
                    alt="url"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{value.title}</div>
                    <p className="text-gray-700 text-base">{value.desc}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {value.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Layout;
