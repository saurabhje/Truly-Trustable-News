import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Router.css'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Footer from './component/footer'
import MainContent from './component/main-content'
import Newspage from './component/newspage'


function Router() {

  return (
    <BrowserRouter>
      <div className="header">
        <Navbar/>
        <Hero />
      </div>  
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/news1" element={<Newspage/>}/>
        </Routes>
        <div className="footer">
        <Footer/>
      </div>
    </BrowserRouter>

      
      
  )
}

export default Router;
