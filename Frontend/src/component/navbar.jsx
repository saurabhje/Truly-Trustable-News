import React, { useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  function showNavBar() {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  }
  

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">The Third Front</Link>
      </div>
      <button
        className="hamburger fa-solid fa-bars"
        style={{ color: "#ffffff", backgroundColor: "transparent" }}
        onClick={showNavBar}
      ></button>
      <button
        className="hamburger fa-regular fa-x"
        style={{ color: "#000000", backgroundColor: "transparent" }}
        onClick={showNavBar}
      ></button>
      <div  ref={navRef} className="nav-link">
        <ul>
          <li>
            <Link to="/aboutus">ABOUT</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT</Link>
          </li>
          <li>
            <button className="support-btn">SUPPORT US</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
