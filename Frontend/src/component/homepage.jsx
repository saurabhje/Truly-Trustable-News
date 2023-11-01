
import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Navbar from './navbar';
import Footer from './footer';
import MainContent from './main-content';
import axios from 'axios';
import "./homepage.css"

const Homepage = () => {
  const [header, setHeader] = useState([]);
  const [imageindex, setImageindex] = useState(0);

  const increaseIndex = () =>{
    setImageindex((imageindex + 1)%(header.length));
  }
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
      const imageTransition = setTimeout(increaseIndex, 4000);
  
      return () => clearTimeout(imageTransition);
    }, [imageindex, header]);
  console.log(header)
  return (
    <div>
      <Navbar />
      <div className='header-wrapper'> 
        {header && header.map((index) => (
          <div className="header" key={index.img} style={{ backgroundImage: index ? `url(${index.img})` : '', translate: `${-100 * imageindex}%`}}>
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
