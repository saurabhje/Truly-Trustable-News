import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';

function Router() {
  return (
    <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/news1" element={<Newspage />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/contactus" element={<Contactus />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
