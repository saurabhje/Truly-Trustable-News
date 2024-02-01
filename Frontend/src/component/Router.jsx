import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Homepage from './homepage';
import Newspage from './newspage';
import Aboutus from './aboutus'
import Contactus from './contactus';
import Login from './login';
import CreateNews from "./CRUD/CreateNews";
import Category from "./category";
import NotFound from "./404";
import homeLoader from "./homepage/homeLoader";

const Router = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
      loader: homeLoader
    },
    {
      path: "/news/:slug",
      element: <Newspage/>,
      errorElement: <NotFound/>
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
    },
    {
      path: "*",
      element: <NotFound/>
    }

  ]);
  return <RouterProvider router={router} />;
}

export default Router;
