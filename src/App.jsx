import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Navbar } from '@components';
import { About, Blog, BlogDetails, Home, Newsletter, NotFound } from '@pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<BlogDetails />} path="/blog/:key" />
        <Route element={<About />} path="/about" />
        <Route element={<Newsletter />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
