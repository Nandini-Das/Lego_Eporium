import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            
            <div className="flex items-center">
              <img className="h-8 w-8" src="https://images.unsplash.com/photo-1620309668391-26ac1c90f61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="Website Logo" />
              <span className="text-white">
                    <span className="text-4xl" style={{ color: 'red' }}>L</span>
                    <span className="text-4xl" style={{ color: 'blue' }}>e</span>
                    <span className="text-4xl" style={{ color: 'green' }}>g</span>
                    <span className="text-4xl" style={{ color: 'orange' }}>o</span>
                    <span> </span>
                    <span className="text-4xl" style={{ color: 'purple' }}>E</span>
                    <span className="text-4xl" style={{ color: 'yellow' }}>p</span>
                    <span className="text-4xl" style={{ color: 'red' }}>o</span>
                    <span className="text-4xl" style={{ color: 'teal' }}>r</span>
                    <span className="text-4xl" style={{ color: 'cyan' }}>i</span>
                    <span className="text-4xl" style={{ color: 'magenta' }}>u</span>
                    <span className="text-4xl" style={{ color: 'brown' }}>m</span>
                 </span>

            </div>

          
            <div className="space-x-4 mt-4">
              <span>Contact Us:</span>
              <br />
              <a href="">Phone : 123-456-7890</a>
              <br />
              <a href="">Email : LegoEporium@gmail.com</a>
            </div>
          </div>

          
          <div>
           
            <div className="flex items-center space-x-4  mt-4">
              <span>Follow Us:</span>
             
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          
          <div>
            
            <div className="mt-4">
              <span>Address:</span>
              <br />
              <span>  92, Dhanmondi, Dhaka, Bangladesh</span>
            </div>

            
            
          </div>
        </div>
       
      </div>
      <div className="mt-4 text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Your Website. All rights reserved.
            </div>
    </footer>
  );
};

export default Footer;
