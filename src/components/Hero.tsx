
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundTranslate = Math.min(scrollY * 0.15, 60);

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 eco-gradient opacity-70 transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${backgroundTranslate}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-eco-green-dark mb-6 font-poppins animate-growUp">
            ECOLENS
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              EcoLens helps institutions educate and incentivise their communities towards more sustainable food choices, turning everyday menus into climate-friendly decisions.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#goals" className="eco-button shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105">
              Learn More
            </a>
            <a
              href="#newsletter"
              className="bg-white border-2 border-eco-green text-eco-green-dark font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg hover:bg-gray-50 transform transition-transform duration-200 hover:scale-105"
            >
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
