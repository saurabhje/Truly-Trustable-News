import { useState, useEffect } from 'react'
import axios from 'axios';
import "./main-content.css"
import { Link } from "react-router-dom";

const MainContent = () => {
  const [data, setData] = useState([]);
  const fetchInfo = () => { 
    return axios.get('http://localhost:3000/') 
             .then((response) => setData(response.data));
  }
    useEffect(() => {
          fetchInfo();
    }, []);
    
  const [mobileview, setmovileview] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setmovileview(true)
    } 
    else {
      setmovileview(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='main'>
      <div className='content'>
        {data.map((e, index) => {
          const itemwrapClass = index % 2 === 0 ? "itemwrap1" : "itemwrap2";
  
          return (
            <Link to={"/newspage"} className="item" state={{id: e._id}} key={index}>
              <div className={itemwrapClass}>
                <img id="img" src='./src/assets/images/newsimg.jpg' alt="News Image" />
                <div className='heading-p'>
                  <hr />
                  <h2>{e.heading}</h2>
                  <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {mobileview || 
        <div className='sidebar'>
          {/* Sidebar content */}
        </div>}
    </div>
  );
};
export default MainContent;