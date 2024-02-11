/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer";
import MainContent from "../main-content/main-content";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import SlidingHeader from "./slidingHeader";
const baseurl = import.meta.env.VITE_BASE_URL;

import "./homepage.css";

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
    if (!isloaded) {
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
        {isloaded ? <SlidingHeader header={header} imageindex={imageindex} /> : null}
      </div>
      <MainContent />
      <Footer />
    </div>
  );
};

export default Homepage;
