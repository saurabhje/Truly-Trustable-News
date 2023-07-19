import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Hero from './component/hero'
import Footer from './component/footer'
import MainContent from './component/main-content'

function App() {

  return (
    <>
      <div className="header">
        <Header/>
      </div>
      <div className="main">
        <div className="hero-sec">  
          <Hero />
        </div>
        <div className="content">
          <MainContent/>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App;
