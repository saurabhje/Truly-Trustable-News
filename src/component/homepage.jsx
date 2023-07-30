import React from 'react'
import Hero from './hero'
import Navbar from './navbar'
import Footer from './footer'
import MainContent from './main-content'
import poco from "../assets/images/poco.jpg";
const Homepage = () => {
  return (
    <div>
        <div className="header"  style={{ backgroundImage: `url(${poco})` }}>
            <Navbar/>
            <Hero/>
        </div>
        <MainContent/>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Homepage;