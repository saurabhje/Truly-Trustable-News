import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const colorRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
    colorRef.current.classList.toggle("opened-tab");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div ref={colorRef} className="navbar">
      <div className="navtitles">
      <div className="nav-logo">
        <Link to="/">The Third Front</Link>
      </div>

      <div className="menu-buttons">
      <button
        className="hamburger fa-solid fa-bars"
        onClick={showNavBar}
        style={{color: "white", display: isNavOpen ? "none" : "block" }}
      ></button>
      <button
        className="hamburger cross fa-regular fa-x"
        onClick={showNavBar}
        style={{ display: isNavOpen ? "block" : "none" }}
      ></button>
      </div>
      </div>
      <div ref={navRef} className="nav-link">
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
