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
    <footer className="container flex flex-col-reverse items-center md:flex-row md:items-start text-xl leading-6 text-black-2 gap-3.5 py-7.5 px-8 lg:px-0 mt-19">
      {/* Copyright */}
      <span className="mt-4 md:mt-0">&copy; 2024</span>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col items-center md:flex-row gap-3.5">
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
