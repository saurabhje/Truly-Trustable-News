import { useState, useEffect } from 'react'
import "./main-content.css"
import { Link } from "react-router-dom";

const MainContent = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
    // Replace with your Express API endpoint
    fetch('http://localhost:3000/') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
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
          {data.map((e, index) => (
            <Link to={"/newspage"} state={{id: e._id}} key={index}>
              <div className='itemwrap1'>
                <img id="img" src='./src/assets/images/newsimg.jpg'></img>
                <div className='heading-p'>
                  <hr/>
                  <h2>{e.heading}</h2>
                  <p>{e.author}</p>
                </div>
              </div>
            </Link>
          ))};
        
      </div>
      {mobileview || 
        <div className='sidebar'>
        </div>}
    </div>
  )
}

export default MainContent;