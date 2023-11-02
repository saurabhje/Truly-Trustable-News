import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './newspage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Newspage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:3000/news/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const renderHtmlContent = (html) => {
    return { __html: html };
  };

  return (
    <>
      <div className='header' style={{ backgroundImage: `url(${data.img})` }}>
        <Navbar />
      </div>
      <div className='newsbody'>
        <div className="news-hero-text">
          <h1>{data.heading}</h1>
          <p>{data.author}</p>
        </div>
        <div className='categories'>
          Categories: 
          {data.category &&
            data.category.map((cat) => (
              <p className='inline-block mx-2 category-link' key={cat._id}>
                <a href={`/category/${cat._id}`}>{cat.title}</a>
              </p>
            ))}
        </div>
        <p>This is going to be a vertical line. Just imagine it!</p>
        <div className="articles" dangerouslySetInnerHTML={renderHtmlContent(data.article)} />
      </div>
      <Footer />
    </>
  );
}

export default Newspage;
