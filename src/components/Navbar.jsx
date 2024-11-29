import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Moon, Sun } from '@icons';

const navLinks = [
  {
    label: 'Blog',
    href: '/blog',
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <nav className="container flex items-center justify-between py-2.5 mt-7.5 mb-5">
      {/* Logo */}
      <Link to="/">
        <span className="font-semibold text-lg">LumosBlog</span>
      </Link>

      <div className="flex items-center gap-3.5">
        {/* Navigation Links */}
        <ul className="flex items-center gap-3.5">
          {navLinks.map((link) => (
            <li key={link.label} className="text-lg p-2">
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
    </nav>
  );
};

export default Navbar;
