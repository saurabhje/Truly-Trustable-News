import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        The Humanist
      </div>
      <div className='nav-link'>
        <a href="aboutus">BOUT</a>
        <a href="contactus">CONTACK</a>
        <button className='support-btn'>SUPPORT US</button>
      </div>
    </div>
  )
}

export default Navbar;
