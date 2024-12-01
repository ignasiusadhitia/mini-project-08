import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Hamburger, Moon, Sun, Close } from '@icons';

const navLinks = [
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Newsletter',
    href: '/newsletter',
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full fixed top-0 bg-white">
        <nav className="container flex items-center justify-between pt-10 pb-7.5 px-8 lg:px-0 text-black-2">
          {/* Logo */}
          <Link to="/">
            <span className="font-semibold text-lg leading-6">LumosBlog</span>
          </Link>

          {/* Tablet and Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Navigation Links */}
            <ul className="flex items-center gap-3.5">
              {navLinks.map((link) => (
                <li key={link.label} className="text-lg leading-6 p-2">
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            {/* Theme Toggle */}
            <div
              className={`flex items-center relative py-2 px-4 gap-4 rounded-3.5xl transition-all duration-300 ease-in-out ${theme === 'light' ? ' bg-black-4' : ' bg-white'}`}
            >
              <div
                className={`w-6 h-6 rounded-full  absolute cursor-pointer transition-all duration-300 ease-in-out ${
                  theme === 'light' ? 'left-14 bg-white' : 'left-4 bg-black-4'
                }`}
                onClick={toggleTheme}
              ></div>
              <Sun className="cursor-pointer" onClick={toggleTheme} />
              <Moon className="cursor-pointer" onClick={toggleTheme} />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <Hamburger
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <nav className="flex flex-col absolute md:hidden items-center justify-center gap-3.5 w-full bg-white top-0 h-screen">
            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-3.5">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-lg leading-6 p-2"
                  onClick={toggleMenu}
                >
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            {/* Theme Toggle */}
            <div
              className={`flex items-center relative py-2 px-4 gap-4 rounded-3.5xl transition-all duration-300 ease-in-out ${theme === 'light' ? ' bg-black-4' : ' bg-white'}`}
            >
              <div
                className={`w-6 h-6 rounded-full  absolute cursor-pointer transition-all duration-300 ease-in-out ${
                  theme === 'light' ? 'left-14 bg-white' : 'left-4 bg-black-4'
                }`}
                onClick={toggleTheme}
              ></div>
              <Sun className="cursor-pointer" onClick={toggleTheme} />
              <Moon className="cursor-pointer" onClick={toggleTheme} />
            </div>
          </nav>
          <Close
            className={`absolute bottom-4 left-0 right-0 mx-auto cursor-pointer`}
            onClick={toggleMenu}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
