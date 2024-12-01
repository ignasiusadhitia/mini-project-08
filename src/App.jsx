import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer, Navbar } from '@components';
import { About, BlogDetails, Home, Newsletter, NotFound } from '@pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog/*',
    element: <BlogDetails />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/newsletter',
    element: <Newsletter />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
