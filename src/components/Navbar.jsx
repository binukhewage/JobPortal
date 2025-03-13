import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Importing icons for the menu
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-white text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              React Jobs
            </span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={linkClass}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={linkClass}>
              Add Job
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 py-2 space-y-2">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={linkClass} onClick={() => setIsOpen(false)}>
            Jobs
          </NavLink>
          <NavLink to="/add-job" className={linkClass} onClick={() => setIsOpen(false)}>
            Add Job
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
