import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="sociohub pl-5">SocioHub</h2>
        <ul className="hg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/reg">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
