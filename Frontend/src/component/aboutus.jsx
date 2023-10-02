import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './aboutus.css'
const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div className="about-us">
            <h1>About us</h1>
            <p className='tag-text'>Presenting the truth under the veil of satire.</p>
            <p>We are a team of 2 talented(we like to think we are)assholes, we don&apos;t know what we are doing anymore. But, we know we are doing something.</p>
            <p>We take on the world&apos;s most serious issues with a wink and a smile, tackling everything from politics to pop culture, from bizarre trends to unbelievable scandals. Nothing is safe from our humorous scrutiny! We serve up a side-splitting buffet of satire, irony, and wit that&apos;s guaranteed to keep you coming back for more.</p>
        </div>
        <div className="tools-used">
          <h2>🛠 Personal Tools</h2>
          <ul>
            <li> <strong>Personal Machine</strong>:{' '} 
              <a href='https://www.microsoft.com/software-download/windows11'>
                Windows
              </a> 
                {' '}
                +  
                {' '}
              <a href='https://ubuntu.com/'>Ubuntu</a> 🔥
            </li>
            <li> <strong>Editor</strong>:  {' '}
              <a href='https://code.visualstudio.com/'>
                VSCode
              </a>
            </li>
            <li> <strong>Dildo</strong>: Nah! we don&apos;t use any.</li>
            <li> <strong>Tech</strong>: 
              MERN + <a href='https://vitejs.dev/'>Vite</a>
            </li>
          </ul>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Homepage;