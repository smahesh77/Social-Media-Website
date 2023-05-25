import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";

function Find() {
    const [authState, setAuthState] = useState(false);
    const [friends, setFriends] = useState([])

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
          setAuthState(true);
        }
      
        try {
          axios
            .post("http://localhost:4000/user/getusers", null, {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            })
            .then((response) => {
              console.log("got into following list");
              console.log(response.data);
              setFriends(response.data);
            })
            .catch((error) => {
              console.error(error);
              alert("An error occurred while fetching following list.");
            });
        } catch (err) {
          console.error(err);
          alert("An error occurred while fetching following list.");
        }
      }, []);

      const follow = (name) => {
        console.log("in here")
        axios.post("http://localhost:4000/user/follow", {
            name2: name
        },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),

                }
            }).then((response) => {

                if (response.data.error) {
                    alert("bruh");
                } else {
                    localStorage.setItem("accessToken", response.data.token);
                    alert(`you started following ${name}`)
                }
            }).catch((err) => {
                console.log("failed")
                //alert("you already follow")
            });
    };


    return (
        <div className="right-nav-styled">
            <div className="user-con">{/* <img src={avatar} /> */}</div>
            {authState && <ul className="menu-items">
                {friends.map((item) => {
                    return (
                        <li key={item.id} >
                            <img
                                className="h-auto border-none  profile"
                                // src={item.icon}
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                // src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
                                alt="profile"
                            ></img>


                            <span className="pl-3">{item.name}</span>
                            <button onClick={follow(item.name)}>Follow</button>

                        </li>
                    );
                })}
            </ul>}

        </div>
    )
}

export default Find