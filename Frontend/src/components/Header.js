import { React } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

import "../components/Header.css";

import title_img from "../images/title-img.avif";
import home from "../images/Home-icon.png";
import about from "../images/about-us2.png";
// import { userContext } from "./Main";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in
  // const [isOpen, setIsOpen] = useContext(userContext);

  const handleLogout = () => {
    // Remove authentication token or any other relevant data
    localStorage.removeItem("token");
    // Redirect user to the login page
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <img src={title_img} alt="Farmer's Assistant"></img>
        <h1 className="title">Farmer's Assistant</h1>
      </div>
      <nav className="nav">
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/home">
                <div className="nav1">
                  <img src={home} alt="Home"></img>Home
                </div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about">
                <div className="nav2">
                  <img src={about} alt="About Us"></img>About us
                </div>
              </Link>
            </li>
            <li>
              <div className="nav3">
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <div className="nav2">
                <Link to="/about">
                  <img src={about} alt="About Us"></img>About us
                </Link>
              </div>
            </li>
          </ul>
        )}
      </nav>
      {/* <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}
    </header>
  );
}

export default Header;
