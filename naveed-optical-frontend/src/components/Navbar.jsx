import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaGlasses } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = `${location.pathname}${location.hash}`;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="bg-ink/90 backdrop-blur-md border-b border-white/10 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <FaGlasses className="text-gold text-3xl" />
            <span className="font-bold text-2xl text-white tracking-wide">
              Naveed Optical
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-medium transition duration-300 ${
                  currentPath === link.href
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/923337269499" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 shadow-sm"
            >
              <FaWhatsapp className="text-xl" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-white hover:text-gold focus:outline-none focus:text-gold w-11 h-11 flex items-center justify-center -mr-2"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ink border-t border-white/10 shadow-lg absolute w-full max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-3.5 rounded-md text-base font-medium ${
                  currentPath === link.href
                    ? 'text-gold bg-surface'
                    : 'text-gray-300 hover:text-gold hover:bg-surface'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/923337269499" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3.5 rounded-md font-medium"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
