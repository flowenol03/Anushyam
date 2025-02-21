import React from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Venues", href: "#venues" },
    { name: "Gallery", href: "#gallery" },
    { name: "Speciality", href: "#speciality" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-amber-500 transition-transform duration-300 hover:scale-110">
              AnuShaam
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
              className="text-gray-300 hover:text-white transition-transform duration-300"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slides from Top) */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md transition-transform duration-500 ease-in-out z-50 
        ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div className="w-full flex flex-col">
          {/* Close button inside menu */}
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-amber-500">
              <X size={32} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-amber-500 text-lg font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
