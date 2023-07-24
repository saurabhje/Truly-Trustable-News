import React from 'react'
import { useState } from 'react'
import "/main-content.css"

const MainContent = () => {
  const [threelayout, setthreelayout] = useState(true)
  const Changelayout = () =>{
    if(threelayout === true){
      setthreelayout(false);
    }
    else{
      setthreelayout(true);
    }
  }
  return (
    <>
      <div style = {threelayout ? {"grid-template-columns": "1fr 1fr 1fr"} : {"grid-template-columns":"1fr 1fr", "gap": "60px"}} className='content'>
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
      <div className='sidebar'>
        <button onClick={Changelayout}>
          <h1 style = {{"color": "white"}}>CHANGE LAYOUT</h1>
        </button>
      </div>
    </>
  )
}

export default MainContent;