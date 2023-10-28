import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './Router.css';
import Homepage from './component/homepage';
import Newspage from './component/newspage';
import Aboutus from './component/aboutus'
import Contactus from './component/contactus';
import Login from './component/login';
import CreateNews from "./component/CRUD/CreateNews";



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
      path: "/edit/:id",
      element: <CreateNews/>
    },
    {
      path: '/createnews',
      element: <CreateNews/>
    }

  ]);
  return <RouterProvider router={router} />;
}

export default Router;
