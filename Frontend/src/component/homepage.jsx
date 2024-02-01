/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream:Frontend/src/component/homepage.jsx
import Hero from "./hero";
import Navbar from "./navbar";
import Footer from "./footer";
import MainContent from "./main-content";
import axios from "axios";
=======
import { useLoaderData }from "react-router-dom"
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Footer from "../footer";
import MainContent from "../main-content/main-content";
>>>>>>> Stashed changes:Frontend/src/component/homepage/homepage.jsx
import styled from "styled-components";
import { Helmet } from "react-helmet";

import "./homepage.css";
import { Link } from "react-router-dom";

const AbsoluteNavbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Homepage = () => {
  const data = useLoaderData();
  const header = data[0];
  const [imageindex, setImageindex] = useState(0);

  const increaseIndex = () => {
    setImageindex((imageindex + 1) % header.length);
  };
  setTimeout(()=>{
    console.log(header)
  }, 5000)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${baseurl}`);
  //       setHeader(response.data);
  //     } catch (error) {
  //       setError("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
<<<<<<< Updated upstream:Frontend/src/component/homepage.jsx
      {error && <p style={{ color: 'red' }}>{error}</p>}
=======
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
>>>>>>> Stashed changes:Frontend/src/component/homepage/homepage.jsx
      <div className="header-wrapper">
        {header &&
          header.map((index) => (
            <Link to={`/news/${index.slug}`} className="header" key={index.img.src} style={{translate: `${-100 * imageindex}%`}}>
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
      <MainContent content={data[1]} sidebar_content={data[2]} cat_content={data[3]}/>
      <Footer />
    </div>
  );
};

export default Homepage;
