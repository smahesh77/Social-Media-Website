import {useState} from "react";
import {Link, Routes, Route, BrowserRouter} from "react-router-dom";
import Reg from "./pages/Reg";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [active, setActive] = useState(1);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Layout />;
      case 2:
        return <Layout />;
      case 3:
        return <Layout />;
      case 4:
        return <Profile />;
      default:
        return <Layout />;
    }
  };

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="layout">
                  <Sidebar active={active} setActive={setActive} />
                  <div className="right-side">{displayData()}</div>
                </div>
              </>
            }
          />
          <Route
            path="/reg"
            element={
              <>
                <Navbar />
                <Reg />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Reg />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
