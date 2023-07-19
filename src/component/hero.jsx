import React from 'react'
import PCimg from "../assets/poco.jpg";
import Moboimg from "../assets/mobo.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <>
        <div className='hero-img'>
                <img 
                    src={PCimg}
                    alt="Hero Banner"
                />
        </div>
        <div className="hero-text">
            <p>This is the story of the century and we are crazy about it also what the 
                hell are you talking about you crazy bastard.
            </p>
            <p> Author Name</p>
        </div>
    </>
  )
}

export default Hero;