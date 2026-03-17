import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaGlasses } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <FaGlasses className="text-navy text-3xl" />
            <span className="font-bold text-2xl text-navy tracking-wide">
              Naveed Optical
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-gray-700 hover:text-gold font-medium transition duration-300"
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
              className="text-navy hover:text-gold focus:outline-none focus:text-gold"
            >
              {isOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/923337269499" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md font-medium"
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
