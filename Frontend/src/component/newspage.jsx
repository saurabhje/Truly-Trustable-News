import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import NewsImg from '../assets/images/newsimg.jpg'
import './newspage.css';
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

const Newspage = () => {
    const [data, setData] = useState([]);
    const {state} = useLocation();
    useEffect(() => {
    // Replace with your Express API endpoint
    fetch(`http://localhost:3000/${state.id}`) // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }, []);

    return (
    <>
        <div className='header' style={{ backgroundImage: `url(${NewsImg})` }}>  
            <Navbar/>
        </div>
        <div className='newsbody'>
            <div className="news-hero-text">
                <h1>{data.heading}</h1>
                <p>{data.author}</p>
            </div>
            
            <p>This is going to be a vertical line. Just imagine it!</p>
            <div className="articles">
                <article>{data.article}</article>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Newspage;
