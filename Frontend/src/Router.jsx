import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';
import Login from './component/login';


const Router = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/newspage",
      element: <Newspage/>
    },
    {
      path: "/aboutus",
      element: <Aboutus/>
    },
    {
      path: "/contactus",
      element: <Contactus/>
    },
    {
      path: "/login",
      element: <Login/>
    },
<<<<<<< HEAD
    {
      path: "/test",
      element: <Test/>
    },
=======

>>>>>>> ec0d136f55a574b8fa31941384655e027dce0dff
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
