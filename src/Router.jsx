import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage'

function Router() {
  return (
    <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/news1" element={<Newspage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
