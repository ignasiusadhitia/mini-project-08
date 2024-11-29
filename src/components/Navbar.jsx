import React from 'react';

import { Link } from 'react-router-dom';

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
  return (
    <nav className="container flex items-start justify-between">
      {/* Logo */}
      <div>
        <span className="font-semibold text-lg">LumosBlog</span>
      </div>
      <div>
        {/* Navigation Links */}
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.label} className="text-lg">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <div className="w-6 h-6 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
