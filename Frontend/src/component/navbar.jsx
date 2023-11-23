import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to="/">The Third Front</Link>
      </div>
      <button className='hamburger fa-solid fa-bars'>
      </button>
      <div className='nav-link'>
        <Link to="/aboutus">ABOUT</Link>
        <Link to="/contactus">CONTACT</Link>
        <button className='support-btn'>SUPPORT US</button>
      </div>
    </div>
  )
}

export default Navbar;
