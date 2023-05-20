import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Home/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import ViewDeatils from "../Pages/Home/ViewDetails/ViewDeatils";
import PrivateRoute from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";


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
            element: <PrivateRoute><ViewDeatils></ViewDeatils></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        
        {
            path: "/myToys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            loader: () => fetch("http://localhost:5000/toys")
        },
        {
            path: "/addToy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            loader: () => fetch("http://localhost:5000/toys")
        },
        {
            path: "/updateToy/:id",
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
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