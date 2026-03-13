
import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 relative">
                <img
                  src="/lovable-uploads/ecolens-logo-transparent.png"
                  alt="EcoLens Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white font-poppins">ECOLENS</span>
            </div>
            <p className="text-gray-300 text-sm">
              Promoting sustainable food consumption within institutional communities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/ecolens-challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform transition-transform duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/peroza/eco-lens-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform transition-transform duration-200 hover:scale-110"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/ecolens_epfl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform transition-transform duration-200 hover:scale-110"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#goals" className="text-gray-300 hover:text-white transition-colors">Goals</a>
              </li>
              <li>
                <a href="#stakeholders" className="text-gray-300 hover:text-white transition-colors">Stakeholders</a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-white transition-colors">History</a>
              </li>
              <li>
                <a href="#app" className="text-gray-300 hover:text-white transition-colors">App</a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>EPFL</li>
              <li>Lausanne, Switzerland</li>
              <li>ecolens.info@gmail.com</li>
            </ul>
          </div>
          
          {/* Newsletter brief */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with our latest news and updates by subscribing to our newsletter.
            </p>
            <a href="#newsletter" className="bg-eco-green hover:bg-eco-green-dark text-white px-4 py-2 rounded-md inline-block transition-colors text-sm">
              Subscribe Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} EcoLens. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
