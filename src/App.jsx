import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <Header/>
      </div>
      <div className="content"></div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App;
