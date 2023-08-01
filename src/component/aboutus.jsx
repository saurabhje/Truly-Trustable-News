import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div className="about">
            <h1>ABOUT US</h1>
            <h2>BLA BLA BLA</h2>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Homepage;