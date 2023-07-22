import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Footer from './component/footer'
import MainContent from './component/main-content'

function App() {

  return (
    <>
      <div className="header">
        <Navbar/>
        <Hero />
      </div>
      <div className="main">
          <MainContent/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App;
