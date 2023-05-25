import {useState, useEffect} from "react";
import axios from "axios";
// import styled from "styled-components";
// import avatar from "../../img/avatar.png";
import "./Rightbar.css";
import {friendsDummy} from "../utils/friendsDummy";
// import {signout} from "../../utils/Icons";

function Rightbar() {
  const [authState, setAuthState] = useState(false);
  const [friends, setFriends] = useState([])

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
        .post("http://localhost:4000/user/getfollowing", null, {
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
    <div className="right-nav-styled">
      <div className="user-con">{/* <img src={avatar} /> */}</div>
      {authState && <ul className="menu-items">
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
      </ul>}
      {authState && (
        <div className="bottom-nav">
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </div>
  );
}

// const NavStyled = styled.nav`
//   padding: 2rem 1.5rem;
//   width: 374px;
//   height: 100%;
//   background: rgba(252, 246, 249, 0.78);
//   border: 3px solid #ffffff;
//   backdrop-filter: blur(4.5px);
//   border-radius: 32px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 2rem;
//   .user-con {
//     height: 100px;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     img {
//       width: 80px;
//       height: 80px;
//       border-radius: 50%;
//       object-fit: cover;
//       background: #fcf6f9;
//       border: 2px solid #ffffff;
//       padding: 0.2rem;
//       box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
//     }
//     h2 {
//       color: rgba(34, 34, 96, 1);
//     }
//     p {
//       color: rgba(34, 34, 96, 0.6);
//     }
//   }

//   .menu-items {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     li {
//       display: grid;
//       grid-template-columns: 40px auto;
//       align-items: center;
//       margin: 0.6rem 0;
//       font-weight: 500;
//       cursor: pointer;
//       transition: all 0.4s ease-in-out;
//       color: rgba(34, 34, 96, 0.6);
//       padding-left: 1rem;
//       position: relative;
//       i {
//         color: rgba(34, 34, 96, 0.6);
//         font-size: 1.4rem;
//         transition: all 0.4s ease-in-out;
//       }
//     }
//   }

//   .active {
//     color: rgba(34, 34, 96, 1) !important;
//     i {
//       color: rgba(34, 34, 96, 1) !important;
//     }
//     &::before {
//       content: "";
//       position: absolute;
//       left: 0;
//       top: 0;
//       width: 4px;
//       height: 100%;
//       background: #222260;
//       border-radius: 0 10px 10px 0;
//     }
//   }
// `;

export default Rightbar;
