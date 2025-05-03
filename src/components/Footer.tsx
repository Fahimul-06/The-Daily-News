import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and about */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Sun className="text-red-500 mr-2" size={24} />
              <span className="text-xl font-serif font-bold tracking-tight">
                The Daily News
              </span>
            </Link>
            <p className="text-slate-300 mb-4">
              Delivering reliable, insightful news coverage since 1995. Your
              trusted source for breaking news and in-depth reporting.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/politics"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  to="/category/business"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/category/technology"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/category/health"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/category/entertainment"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/advertise"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  to="/ethics"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Ethics Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-slate-300 mb-4">
              Get the latest news delivered to your inbox daily.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md text-slate-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400 flex flex-col md:flex-row justify-between">
          <div>© 2025 The Daily News. All rights reserved.</div>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
