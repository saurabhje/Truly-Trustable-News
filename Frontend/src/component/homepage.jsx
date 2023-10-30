import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Navbar from './navbar';
import Footer from './footer';
import MainContent from './main-content';
import axios from 'axios';

const Homepage = () => {
  const [header, setHeader] = useState([]);
  const [currentindex, setCurrentindex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setHeader(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let interval;
    if (header.length > 0) {
      interval = setInterval(() => {
        setCurrentindex((prevIndex) => (prevIndex + 1) % header.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [header]);

  return (
    <div>
      <div className="header" style={{ backgroundImage: header[currentindex] ? `url(${header[currentindex].img})` : '' }}>
        <Navbar />
        <Hero />
      </div>
      <MainContent />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
