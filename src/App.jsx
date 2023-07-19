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
