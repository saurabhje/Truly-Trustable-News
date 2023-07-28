/* eslint-disable react/prop-types */
import React from 'react'
import "./hero.css";

const Hero = (props) => {
  return (
    <div className='hero-sec'>
        <div className="hero-text">
            <h1>{props.currenttitle}
            </h1>
            <h2>{props.currentauth}</h2>
        </div>
    </div>
  )
}

export default Hero;