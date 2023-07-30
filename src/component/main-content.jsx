import React from 'react'
import { useState, useEffect } from 'react'
import "./main-content.css"

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
        <a href="news1" className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </a>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap1'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
        <div className="item">
          <div className='itemwrap2'>
            <img id="img" src='./src/assets/images/poco.jpg'></img>
            <h2>this is the heading</h2>
          </div>
          <p>bla bla bla bla bla bla bla lb narendra modi bla lbal dlad hmklajmkclamrk nlknakll mfdsklm fkdsmnf kldjf kldsngjdf jgkldn kgj ksngkdfm gfdkng kdfmgdklm gkldfg kldfjgklrf kgldfnvkl dfkglv kdfog kdfklgjm kdflgm  </p>
        </div>
      </div>
      {mobileview || 
        <div className='sidebar'>
        </div>}
    </div>
  )
}

export default MainContent;