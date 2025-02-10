import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Venues', href: '#venues' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm transition-all duration-300">
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
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transform transition-transform duration-500 ease-in-out 
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="px-6 pt-8 pb-6 space-y-4 text-center">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-amber-500 text-lg font-medium transition-all duration-300
              opacity-0 translate-y-4 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
