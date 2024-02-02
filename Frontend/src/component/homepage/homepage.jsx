/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Footer from "../footer";
import MainContent from "../main-content/main-content";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const baseurl = import.meta.env.VITE_BASE_URL;

import "./homepage.css";
import { Link } from "react-router-dom";

const AbsoluteNavbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
`;

let isloaded = false;
let head = [];
const Homepage = () => {
  const [header, setHeader] = useState(head);
  const [imageindex, setImageindex] = useState(0);
  const [error, setError] = useState("");

  const increaseIndex = () => {
    setImageindex((imageindex + 1) % header.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}`);
        setHeader(response.data);
        isloaded = true
        head = response.data
      } catch (error) {
        setError("Error fetching data:", error);
      }
    };
    if(!isloaded){
      fetchData();
    }
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
      <AbsoluteNavbar className="absnav">
        <Navbar />
      </AbsoluteNavbar>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="header-wrapper">
        {header &&
          header.map((index) => (
            <Link
              to={`/news/${index.slug}`}
              className="header"
              key={index.img.src}
              style={{ translate: `${-100 * imageindex}%` }}
            >
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
            </Link>
          ))}
      </div>
      <MainContent />
      <Footer />
    </div>
  );
};

export default Homepage;
