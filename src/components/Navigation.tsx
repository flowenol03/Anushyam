import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' }, // Added About section
    { name: 'Venues', href: '#venues' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Speciality', href: '#speciality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-amber-500 transition-transform duration-300 hover:scale-110">
              AnuShyam
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-amber-500 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium
                  before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-amber-500
                  before:transition-all before:duration-300 before:ease-in-out
                  hover:before:w-full hover:before:left-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-gray-300 hover:text-white transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-500 ease-in-out flex flex-col items-center justify-center z-50
  ${isMenuOpen ? 'opacity-100 scale-100 h-screen' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="w-full px-6 pt-20 pb-6 space-y-6 text-center flex flex-col">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-amber-500 text-lg font-medium transition-all duration-300 transform opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navigation;