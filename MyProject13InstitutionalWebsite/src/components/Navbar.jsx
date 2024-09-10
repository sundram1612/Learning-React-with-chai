import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-around">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link to="/courses" className="text-white">Courses</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Contact</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="text-white">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
