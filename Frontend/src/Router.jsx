import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';
import Login from './component/login';
import Create_news from "./component/CRUD/create-news";


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
      path: "/login",
      element: <Login/>
    },
    {
      path: "/create-news",
      element: <Create_news/>
    },

  ]);
  return <RouterProvider router={router} />;
}

export default Router;
