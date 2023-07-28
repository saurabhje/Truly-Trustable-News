import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Router.css'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Footer from './component/footer'
import MainContent from './component/main-content'
import Newspage from './component/newspage'


function Router() {
  const[currenttitle, setCurrenttitle] = useState("This is the story of the century and we are crazy about it also what the hell are you talking about you crazy bastard.")
  const[currentimg, setCurrentimg] = useState("../src/assets/poco.jpg")
  const[currentauth, setCurrentauth] = useState("Author Name")

  return (
    <BrowserRouter>
      <div style={{backgroundImage: `url(${currentimg})`}} className="header">
        <Navbar/>
        <Hero currenttitle={currenttitle} currentauth={currentauth}/>
      </div>  
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/news1" element={<Newspage setCurrenttitle={setCurrenttitle} setCurrentimg={setCurrentimg} setCurrentauth={setCurrentauth}/>}/>
        </Routes>
        <div className="footer">
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default Router;
