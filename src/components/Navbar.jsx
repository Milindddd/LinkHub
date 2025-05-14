import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 text-xl font-bold text-blue-600 dark:text-blue-400">
          <Link to="/">KonnectUs</Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Create
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/auth"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
