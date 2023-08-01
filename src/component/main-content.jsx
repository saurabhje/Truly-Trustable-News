import { useState, useEffect } from 'react'
import "./main-content.css"
import {Link} from 'react-router-dom'

const MainContent = () => {
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
        <Link to="news1" className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/newsimg.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </Link>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <div className='heading-p'>
              <h2>this is the heading just a little bit bigger</h2>
              <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk</p>
            </div>
          </div>
        </div>
      </div>
      {mobileview || 
        <div className='sidebar'>
        </div>}
    </div>
  )
}

export default MainContent;