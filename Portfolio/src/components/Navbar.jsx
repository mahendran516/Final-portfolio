import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center p-6 bg-purple-500 shadow-lg fixed top-0 z-10">
      <h1 className="text-2xl font-bold text-white">MAHENDRAN</h1>
      <div className="hidden md:flex space-x-6">
        <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" to="/">Home</Link>
        <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" to="/projects">Projects</Link>
        <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" to="/resume">Resume</Link>
        <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" to="/contact">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-500 shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" onClick={toggleMenu} to="/">Home</Link>
            <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" onClick={toggleMenu} to="/projects">Projects</Link>
            <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" onClick={toggleMenu} to="/resume">Resume</Link>
            <Link className="font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out" onClick={toggleMenu} to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
