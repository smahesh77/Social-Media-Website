import {useState, useEffect} from "react";
import axios from "axios";
import "./Rightbar.css";
import {friendsDummy} from "../utils/friendsDummy";

function Rightbar() {
  const [authState, setAuthState] = useState(false);
  const [friends, setFriends] = useState([]);

  const signOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
    alert("you have logged out");
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }

    try {
      axios
        .post("https://sochub.onrender.com/user/getfollowing", null, {
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

  return (
    <div className="right-nav-styled mt-2">
      <div className="user-con">{/* <img src={avatar} /> */}</div>
      {authState && (
        <ul className="menu-items">
          {friends.map((item) => {
            return (
              <li key={item.id} onClick>
                <img
                  className="h-auto border-none  profile"
                  // src={item.icon}
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  // src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
                  alt="profile"
                ></img>

                <span className="pl-3">{item.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Rightbar;
