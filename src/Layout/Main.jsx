import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();

    const getTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Lego Eporium | Home';
        case '/toys':
          return 'Lego Eporium | All Toys';
        case '/myToys':
          return 'Lego Eporium | My Toys';
          case '/addToy':
          return 'Lego Eporium | Add Toy';
          case '/login':
          return 'Lego Eporium | Login';
          case '/register':
         return 'Lego Eporium | Register';
        case '/blogs':
        return 'Lego Eporium | Blogs';
      
        default:
          return 'Lego Eporium';
      }
    };
  
    return (

        <div>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>
      <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
    </div>
       
    );
};

export default Main;