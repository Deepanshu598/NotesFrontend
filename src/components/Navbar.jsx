import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const generateBreadcrumb = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
      <div className="text-sm text-gray-400">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <span key={name}>
              <span className="mx-2">/</span>
              {index === pathnames.length - 1 ? (
                <span className="text-white">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:text-gray-300">
                  {name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Notes App</Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <div className="mt-2">{generateBreadcrumb()}</div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:items-center">
            {!token ? (
              <>
                <Link to="/login" className="mr-4 hover:text-gray-300 py-2 md:py-0">Login</Link>
                <Link to="/signup" className="mr-4 hover:text-gray-300 py-2 md:py-0">Sign Up</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="mr-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
