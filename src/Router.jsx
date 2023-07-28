import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Router.css'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Footer from './component/footer'
import MainContent from './component/main-content'

function Router() {

  return (
    <BrowserRouter>
      <div className="header">
        <Navbar/>
        <Hero />
      </div>  
        <Routes>
          <Route path="/" element={<MainContent/>}/>
        </Routes>
        <div className="footer">
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default Router;
