import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Sun } from 'lucide-react';
import NavLinks from './NavLinks';
import WeatherWidget from './WeatherWidget';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search for:', searchQuery);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        {/* Top bar with date, weather and user controls */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-slate-200">
          <div className="flex items-center space-x-4">
            <span className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <WeatherWidget />
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-700 transition-colors">Subscribe</button>
            <button className="hover:text-blue-700 transition-colors">Sign In</button>
          </div>
        </div>
        
        {/* Main header with logo and navigation */}
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center">
              <Sun className="text-red-600 mr-2" size={28} />
              <span className="text-3xl font-serif font-bold tracking-tight">The Daily News</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <NavLinks />
          </div>
          
          <form onSubmit={handleSearchSubmit} className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 pr-10 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 text-slate-500">
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white shadow-lg border-t border-slate-200 py-4">
          <div className="container mx-auto px-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
            <form onSubmit={handleSearchSubmit} className="mt-4 relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-10 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 text-slate-500">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;