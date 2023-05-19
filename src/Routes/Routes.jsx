import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Home/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDeatils from "../Pages/Home/ViewDetails/ViewDeatils";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "/toys",
            element: <AllToys></AllToys>,
        },
        {
            path: "/toys/:id",
            element: <ViewDeatils></ViewDeatils>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        
        {
            path: "/my-toys",
            element: <Home></Home>,
        },
        {
            path: "/add-toy",
            element: <Home></Home>,
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;