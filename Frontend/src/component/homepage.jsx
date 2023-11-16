import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Navbar from './navbar';
import Footer from './footer';
import MainContent from './main-content';
import axios from 'axios';
import styled from 'styled-components';
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

  const increaseIndex = () =>{
    setImageindex((imageindex + 1)%(header.length));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://truly-trustable-news-s52o.vercel.app/');
        setHeader(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const imageTransition = setTimeout(increaseIndex, 4000);
    return () => clearTimeout(imageTransition);
  }, [imageindex, header]);

  return (
    // <div style={{overflow: "hidden"}}>
    <div>
      <AbsoluteNavbar>
        <Navbar />
      </AbsoluteNavbar>
      <div className='header-wrapper'> 
        {header && header.map((index) => (
          <div className="header" key={index.img.src} style={{ backgroundImage: index ? `url(${index.img.src})` : '', backgroundPosition: index.img.position ? `${index.img.position}` : 'center', translate: `${-100 * imageindex}%`}}>
            <Hero heading={index.heading} author={index.author}/>
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
