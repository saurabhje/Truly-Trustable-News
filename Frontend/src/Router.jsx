import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';
import Login from './component/login';
import CreateNews from "./component/CRUD/CreateNews";
import Category from "./component/category";


const Router = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/news/:id",
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
      path: "/reallybreh12",
      element: <Login/>
    },
    {
      path: "/edit/:id",
      element: <CreateNews/>
    },
    {
      path: '/createnews',
      element: <CreateNews/>
    },
    {
      path: '/category/:id',
      element: <Category/>
    }

  ]);
  return <RouterProvider router={router} />;
}

export default Router;
