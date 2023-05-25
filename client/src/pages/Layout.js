import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Layout() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const reversedPosts = [...listOfPosts].reverse();

  return (
    <>
      <div className="ml-5 mt-5 max-w-md ">
        <div className="mb-5 flex justify-center drop-shadow-lg">
          <button
            className="bg-pink-100 flex justify-center p-3 pl-5 pr-5 m-2 rounded-full text-1.5xl"
            onClick={() => navigate("/posts/create")}
          >
            Add Post
          </button>
        </div>

        <div>
          {reversedPosts.map((value, key) => {
            return (
              <div
                className="post mt-2 mb-2"
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                <div className="max-w-lg overflow-hidden rounded drop-shadow-xl">
                  <img
                    className="h-auto max-w-full rounded-lg border transition-shadow"
                    src="https://tecdn.b-cdn.net/img/new/standard/city/047.jpg"
                    alt="post image "
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{value.title}</div>
                    <p className="text-gray-700 text-base">{value.desc}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {value.userId}
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
