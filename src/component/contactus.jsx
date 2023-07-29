import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import MainContent from './main-content'
const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div className="contact">
            <h1>Contact US</h1>
            <h2>BLA BLA BLA</h2>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Homepage;