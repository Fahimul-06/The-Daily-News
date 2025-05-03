import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, setIsMenuOpen }) => {
  const categories = [
    { name: 'Politics', path: '/category/politics' },
    { name: 'Business', path: '/category/business' },
    { name: 'Technology', path: '/category/technology' },
    { name: 'Health', path: '/category/health' },
    { name: 'Entertainment', path: '/category/entertainment' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Opinion', path: '/category/opinion' },
  ];

  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${mobile ? 'flex flex-col space-y-3' : 'flex space-x-5'}`}>
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className={`font-medium hover:text-red-600 transition-colors ${mobile ? 'text-lg py-2 border-b border-slate-100' : 'text-sm'}`}
          onClick={handleClick}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;