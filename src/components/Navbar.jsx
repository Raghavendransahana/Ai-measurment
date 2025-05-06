import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Star, FileText, CheckSquare, DollarSign } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-pink-100 shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-30 border-b-2 border-pink-200 mb-20">
      <div className="flex flex-row items-center justify-between h-auto py-4 px-6">
        {/* Website Name */}
        <div className="text-pink-600 text-2xl lavishly-yours-regular">
          My Boutique
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-pink-700 hover:text-pink-500 transition duration-300 flex flex-col items-center"
          >
            <Home className="w-6 h-6" />
          </Link>
          <Link
            to="/inspirations"
            className="text-pink-700 hover:text-pink-500 transition duration-300 flex flex-col items-center"
          >
            <Star className="w-6 h-6" />
          </Link>
          <Link
            to="/form-one"
            className="text-pink-700 hover:text-pink-500 transition duration-300 flex flex-col items-center"
          >
            <FileText className="w-6 h-6" />
          </Link>
          <Link
            to="/todo"
            className="text-pink-700 hover:text-pink-500 transition duration-300 flex flex-col items-center"
          >
            <CheckSquare className="w-6 h-6" />
          </Link>
          <Link
            to="/finance"
            className="text-pink-700 hover:text-pink-500 transition duration-300 flex flex-col items-center"
          >
            <DollarSign className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
