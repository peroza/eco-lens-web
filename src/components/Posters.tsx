
import React from 'react';

const Posters = () => {
  return (
    <section id="posters" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Posters</h2>
        <p className="section-subtitle">
          You can take a look at our fancy posters 😉
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Poster 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-eco-mint-light text-center">
              <h3 className="text-lg font-semibold text-eco-green-dark">EcoLens Challenge Poster 1</h3>
            </div>
            <div className="p-6 flex justify-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden w-full max-w-xs aspect-[3/4] flex items-center justify-center">
                <img 
                  src="/public/lovable-uploads/fa9911e0-dd7c-4548-ad7f-c7d72c5c8814.png" 
                  alt="EcoLens Poster 1" 
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x400?text=Poster+Preview';
                  }}
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <a 
                href="#" 
                className="text-eco-green hover:text-eco-green-dark font-medium inline-block"
              >
                Download Poster
              </a>
            </div>
          </div>
          
          {/* Poster 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-eco-mint-light text-center">
              <h3 className="text-lg font-semibold text-eco-green-dark">EcoLens Challenge Poster 2</h3>
            </div>
            <div className="p-6 flex justify-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden w-full max-w-xs aspect-[3/4] flex items-center justify-center">
                <img 
                  src="/public/lovable-uploads/fa9911e0-dd7c-4548-ad7f-c7d72c5c8814.png" 
                  alt="EcoLens Poster 2" 
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x400?text=Poster+Preview';
                  }}
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <a 
                href="#" 
                className="text-eco-green hover:text-eco-green-dark font-medium inline-block"
              >
                Download Poster
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posters;
