
import React from 'react';

const Support = () => {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Support</h2>
        <p className="section-subtitle">
          All this wouldn't be possible without the support of:
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center w-48 h-32">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-lg text-gray-400">Supporter 1</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center w-48 h-32">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-lg text-gray-400">Supporter 2</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center w-48 h-32">
              <div className="text-center">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-lg text-gray-400">Supporter 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
