import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Replace with actual auth logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      status: true,
    },
    {
      name: 'Login',
      path: '/login',
      status: !authStatus,
    },
    {
      name: 'Register',
      path: '/register',
      status: !authStatus,
    },
    {
      name: 'Create Recipe',
      path: '/create-recipe',
      status: authStatus,
    },
    {
      name: 'All Recipes',
      path: '/recipes',
      status: authStatus,
    },
  ];

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
            />
          </svg>
          <Link
            to="/"
            className="text-teal-500 hover:text-teal-600 transition-all duration-300 transform hover:scale-105 drop-shadow-md"
          >
            Recipe Haven
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-10">
          {navLinks.map((item) => (
            item.status ? (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-base font-semibold hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ) : null
          ))}
          {authStatus && (
            <li
            className="cursor-pointer block text-base font-semibold text-gray-800 hover:text-teal-600 transition-all duration-300">
              <Logout />
            </li>
          )}
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="sm:hidden text-gray-800 text-2xl focus:outline-none transition-transform duration-300 transform hover:scale-110 border border-gray-300 rounded-md p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white mt-4 mx-4 rounded-md shadow-lg">
          <ul className="flex flex-col space-y-3 py-4 px-6">
            {navLinks.map((item) => (
              item.showWhenAuthenticated === authStatus ? (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block text-base font-semibold text-gray-800 hover:text-teal-600 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li
               className="block text-base font-semibold text-gray-800 hover:text-teal-600 transition-all duration-300">
                <Logout />
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;