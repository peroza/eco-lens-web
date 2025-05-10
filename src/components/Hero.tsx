
import React from 'react';

const Hero = () => {
  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-eco-mint-light to-eco-green-light opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="w-24 h-24 relative mb-6 animate-growUp">
            <div className="absolute inset-0 border-8 border-eco-green rounded-full"></div>
            <div className="absolute inset-4 bg-eco-mint rounded-full"></div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-eco-green-dark mb-6 font-poppins">
            ECOLENS
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              EcoLens' goal is to educate and incentivise institution's communities towards a more sustainable nutrition.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#goals" className="bg-eco-green hover:bg-eco-green-dark text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg">
              Learn More
            </a>
            <a href="#newsletter" className="bg-white border-2 border-eco-green text-eco-green-dark font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg hover:bg-gray-50">
              Stay Updated
            </a>
          </div>
        </div>
      </div>
      
      {/* Curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
