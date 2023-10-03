import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';
import Login from './component/login';
import Test from "./component/test";

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
    {
      path: "/test",
      element: <Test/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
