import React from 'react'
import { useState, useEffect } from 'react'
import "/main-content.css"

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
    <>
      <div style= {mobileview ? {"grid-template-columns": "1fr"}: {"grid-template-columns": "1fr 1fr"}} className='content'>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      {mobileview || 
        <div className='sidebar'>
        </div>}
    </>

  )
}

export default MainContent;