import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to="/">The Third Front</Link>
      </div>
      <div className='nav-link'>
        <Link to="/aboutus">BOUT</Link>
        <Link to="/contactus">CONTACK</Link>
        <button className='support-btn'>SUPPORT US</button>
      </div>
    </div>
  )
}

export default Navbar;
