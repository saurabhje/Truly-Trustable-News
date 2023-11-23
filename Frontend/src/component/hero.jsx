import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./hero.css";

const Hero = (props) => {
  return (
      <div className="hero-text">
        <h1>
          {props.heading}
        </h1>
        <h2>{props.author}</h2>
      </div>
  );
};

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Hero;
