
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 border-4 border-eco-green rounded-full"></div>
                <div className="absolute inset-2 bg-eco-mint rounded-full"></div>
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-eco-green-dark' : 'text-eco-green-dark'} font-poppins`}>ECOLENS</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#goals" className={`font-medium hover:text-eco-green transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>Goals</a>
            <a href="#stakeholders" className={`font-medium hover:text-eco-green transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>Stakeholders</a>
            <a href="#history" className={`font-medium hover:text-eco-green transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>History</a>
            <a href="#posters" className={`font-medium hover:text-eco-green transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>Posters</a>
            <a href="#support" className={`font-medium hover:text-eco-green transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>Support</a>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a href="#newsletter" className={`${scrolled ? 'bg-eco-green' : 'bg-eco-green'} hover:bg-eco-green-dark text-white px-4 py-2 rounded-md transition-colors`}>
              Stay Updated
            </a>
          </div>
          
          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            <a href="#goals" className="font-medium text-gray-800 hover:text-eco-green transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Goals</a>
            <a href="#stakeholders" className="font-medium text-gray-800 hover:text-eco-green transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Stakeholders</a>
            <a href="#history" className="font-medium text-gray-800 hover:text-eco-green transition-colors py-1" onClick={() => setIsMenuOpen(false)}>History</a>
            <a href="#posters" className="font-medium text-gray-800 hover:text-eco-green transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Posters</a>
            <a href="#support" className="font-medium text-gray-800 hover:text-eco-green transition-colors py-1" onClick={() => setIsMenuOpen(false)}>Support</a>
            <a href="#newsletter" className="bg-eco-green hover:bg-eco-green-dark text-white px-4 py-2 rounded-md transition-colors text-center mt-2" onClick={() => setIsMenuOpen(false)}>
              Stay Updated
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
