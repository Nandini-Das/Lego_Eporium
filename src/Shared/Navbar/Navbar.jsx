import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };

  return (
    <nav className="bg-pink-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Website Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-12"
                src="https://images.unsplash.com/photo-1620309668391-26ac1c90f61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                alt="Website Logo"
              />
            </div>

            {/* Website Name */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <span className="text-white">
                  <span className="font-bold text-4xl text-red-500">L</span>
                  <span className="font-bold text-4xl text-blue-500">e</span>
                  <span className="font-bold text-4xl text-green-500">g</span>
                  <span className="font-bold text-4xl text-orange-500">o</span>
                  <span>&nbsp;</span>
                  <span className="font-bold text-4xl text-purple-500">E</span>
                  <span className="font-bold text-4xl text-yellow-500">p</span>
                  <span className="font-bold text-4xl text-red-500">o</span>
                  <span className="font-bold text-4xl text-teal-500">r</span>
                  <span className="font-bold text-4xl text-cyan-500">i</span>
                  <span className="font-bold text-4xl text-pink-500">u</span>
                  <span className="font-bold text-4xl text-blue-700">m</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home */}
            <NavLink
              as={Link}
              to="/"
              className="text-amber-900 text-2xl hover:text-gray-400 py-2 px-2 rounded"
              exact
              activeClassName="text-gray-400"
            >
              Home
            </NavLink>

            {/* All Toys */}
            <NavLink
              as={Link}
              to="/toys"
              className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
              activeClassName="text-gray-400"
            >
              All Toys
            </NavLink>

            {/* Blogs */}
            <NavLink
              as={Link}
              to="/blogs"
              className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
              activeClassName="text-gray-400"
            >
              Blogs
            </NavLink>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden flex items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex="0" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="dropdown-content bg-base-100 shadow-lg">
                {/* Home */}
                <li>
                  <NavLink
                    as={Link}
                    to="/"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    exact
                    activeClassName="bg-gray-100"
                  >
                    Home
                  </NavLink>
                </li>

                {/* All Toys */}
                <li>
                  <NavLink
                    as={Link}
                    to="/toys"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    activeClassName="bg-gray-100"
                  >
                    All Toys
                  </NavLink>
                </li>

                {/* Blogs */}
                <li>
                  <NavLink
                    as={Link}
                    to="/blogs"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    activeClassName="bg-gray-100"
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            {user && (
              <img
                className="w-12 float-end h-12 rounded-full object-cover mr-4"
                src={user.photoURL}
                alt="Profile"
                title={user.displayName}
              />
            )}
            {user ? (
              <>
                <button className="float-end m-4 me-2 btn btn-secondary" onClick={handleLogOut}>
                  Logout
                </button>
                <NavLink
                  as={Link}
                  to="/myToys"
                  className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
                  activeClassName="text-gray-400"
                >
                  My Toys
                </NavLink>
                <NavLink
                  as={Link}
                  to="/addToy"
                  className="text-amber-900 text-xl hover:text-gray-400 py-2 px-2 rounded"
                  activeClassName="text-gray-400"
                >
                  Add A Toy
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
