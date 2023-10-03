import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main-content.css';
import { Link } from 'react-router-dom';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [mobileView, setMobileView] = useState(false);

  const fetchInfo = () => {
    axios
      .get('http://localhost:3000/')
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="content">
        {data.map((e, index) => {
          const itemWrapClass = index % 2 === 0 ? 'itemwrap1' : 'itemwrap2';

          return (
            <Link to="/newspage" className="item" key={index} state={{ id: e._id }}>
              <div className={itemWrapClass}>
                <img id="img" src="./src/assets/images/newsimg.jpg" alt="News Image" />
                <div className="heading-p">
                  <hr />
                  <h2>{e.heading}</h2>
                  <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {!mobileView && (
        <div className="sidebar">
          {/* Sidebar content */}
        </div>
      )}
    </div>
  );
};

export default MainContent;
