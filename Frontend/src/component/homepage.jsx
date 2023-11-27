/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import Footer from "./footer";
import MainContent from "./main-content";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const baseurl = import.meta.env.VITE_BASE_URL;

import "./homepage.css";

const AbsoluteNavbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Homepage = () => {
  const [header, setHeader] = useState([]);
  const [imageindex, setImageindex] = useState(0);

  const increaseIndex = () => {
    setImageindex((imageindex + 1) % header.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}`);
        setHeader(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const imageTransition = setTimeout(increaseIndex, 4000);
    return () => clearTimeout(imageTransition);
  }, [imageindex, header]);

  return (
    <div>
      <Helmet>
        <title>The Third Front</title>
        <meta name="description" content="Homepage of a satirical news blog" />
      </Helmet>
      <AbsoluteNavbar>
        <Navbar />
      </AbsoluteNavbar>
      <div className="header-wrapper">
        {header &&
          header.map((index) => (
            <div className="header" key={index.img.src} style={{translate: `${-100 * imageindex}%`}}>
              <div
                className="background-layer"
                style={{
                  backgroundImage: index
                    ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1)), url(${index.img.src})`
                    : "",
                  backgroundPosition: index.img.position
                    ? `${index.img.position}`
                    : "center",
                }}
              ></div>
              <div className="text-layer">
                <Hero heading={index.heading} author={index.author} />
              </div>
            </div>
          ))}
      </div>
      <MainContent />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
