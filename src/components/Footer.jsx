const navLinks = [
  {
    name: 'Twitter',
    path: 'https://twitter.com',
  },
  {
    name: 'LinkedIn',
    path: 'https://linkedin.com',
  },
  {
    name: 'Email',
    path: '#',
  },
  {
    name: 'RSS feed',
    path: '#',
  },
  {
    name: 'Add to Feedly',
    path: '#',
  },
];

const Footer = () => {
  return (
    <footer className="container flex text-xl leading-6 text-black-2 gap-3.5">
      {/* Copyright */}
      <span>&copy; 2024</span>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-3.5">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <a href={path} rel="noreferrer noopener" target="_black">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
