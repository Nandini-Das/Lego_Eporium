import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
    return (
       
        <nav className="bg-pink-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Website Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img className="h-12 w-12" src="https://images.unsplash.com/photo-1620309668391-26ac1c90f61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="Website Logo" />
              </div>
  
              {/* Website Name */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                <span className="text-white">
                    <span className="font-bold text-4xl" style={{ color: 'red' }}>L</span>
                    <span className="font-bold text-4xl" style={{ color: 'blue' }}>e</span>
                    <span className="font-bold text-4xl" style={{ color: 'green' }}>g</span>
                    <span className="font-bold text-4xl" style={{ color: 'orange' }}>o</span>
                    <span> </span>
                    <span className="font-bold text-4xl" style={{ color: 'purple' }}>E</span>
                    <span className="font-bold text-4xl" style={{ color: 'yellow' }}>p</span>
                    <span className="font-bold text-4xl" style={{ color: 'red' }}>o</span>
                    <span className="font-bold text-4xl" style={{ color: 'teal' }}>r</span>
                    <span className="font-bold text-4xl" style={{ color: 'cyan' }}>i</span>
                    <span className="font-bold text-4xl" style={{ color: 'magenta' }}>u</span>
                    <span className="font-bold text-4xl" style={{ color: 'brown' }}>m</span>
                 </span>

  
                </div>
              </div>
            </div>
  
            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Home */}
              <NavLink as={Link}
                to="/"
                className="text-amber-900 text-2xl hover:text-gray-400 py-2 px-2 rounded"
                exact
              >
                Home
              </NavLink>
  
              {/* All Toys */}
              <NavLink
               as={Link} to="/toys"
                className="text-amber-900  text-xl hover:text-gray-400 py-2 px-2 rounded"
                
              >
                All Toys
              </NavLink>
  
              
  
              {/* Add A Toy */}
              <NavLink as={Link}
                to="/addToy"
                className="text-amber-900 text-xl  hover:text-gray-400 py-2 px-2 rounded"
                
              >
                Add A Toy
              </NavLink>
  
              {/* Blogs */}
              <NavLink as={Link} 
                to="/blogs"
                className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
              
              >
                Blogs
              </NavLink>

            </div>
  
            <div className='flex items-center'>
            {user && (
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={user.photoURL}
            alt="Profile"
            title={user.displayName}
          />
        )}
        {user ? (<>
         
  
          <button className="float-end m-4 me-2 btn btn-secondary" onClick={handleLogOut}>
            Logout
          </button>
          <NavLink as={Link}
                to="/myToys"
                className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
                
              >
                My Toys
              </NavLink>
        </>
          
        ) : (
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        )}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;