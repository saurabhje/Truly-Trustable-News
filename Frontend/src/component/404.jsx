import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
  };

  const headingStyle = {
    fontSize: "2em",
    color: "#FF6347", // Tomato color
  };

  const linkStyle = {
    display: "block",
    margin: "10px",
    color: "#4169E1", // Royal Blue color
    textDecoration: "none",
    fontSize: "1.2em",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/aboutus" style={linkStyle}>
        About 
      </Link>
      <Link to="/contactus" style={linkStyle}>
        Contact
      </Link>
    </div>
  );
};

export default NotFound;
