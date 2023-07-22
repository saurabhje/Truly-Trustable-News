import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        The Humanist
      </div>
      <div className='nav-link'>
        <p>BOUT</p>
        <p>CONTACK</p>
        <button className='support-btn'>SUPPORT US</button>
      </div>
    </div>
  )
}

export default Navbar;
