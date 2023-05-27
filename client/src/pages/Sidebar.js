import {useState, useEffect} from "react";
// import styled from "styled-components";
// import avatar from "../../img/avatar.png";
import "./Sidebar.css";
import {menuItems} from "../utils/menuItems";
import {signout} from "../utils/Icons";

function Sidebar({active, setActive}) {
  const [authState, setAuthState] = useState(false);

  const signOut = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
    alert("you have logged out");
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  }, []);

  return (
    <div className="nav-styled mt-2 ">
      <div className="user-con">{/* <img src={avatar} /> */}</div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      {authState && (
        <div className="bottom-nav">
          <button onClick={signOut}>{signout} Sign out</button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
