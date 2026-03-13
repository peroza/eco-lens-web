
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { History as HistoryIcon, CalendarDays, Award, Building, Leaf } from 'lucide-react';

const History = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView<HTMLDivElement>();

  return (
    <section id="history" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">History</h2>
        <p className="section-subtitle">
          Physical pilot in 2022 · Digital app pilot in 2025 · EcoLens evolving based on real-world feedback
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-eco-mint"></div>
            
            {/* Timeline events */}
            <div
              ref={timelineRef}
              className={`space-y-12 transition-opacity transition-transform duration-500 ease-out ${
                timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Origin */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="flex md:flex-row-reverse md:w-1/2 md:pr-8 md:pl-0 pl-8 items-center mb-4 md:mb-0">
                  <div className="md:ml-8 md:text-right">
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Project Origins</h3>
                    <p className="text-gray-600">
                      EcoLens was born from a collaboration with DLAB, led by Prof. Robert West, and PhD student Kristina Gligoric. The initial development of the app began as a semester project by Master's student Andrea Perozziello at EPFL.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <HistoryIcon size={16} className="text-white" />
                </div>
                
                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Physical pilot (2022) */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right"></div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <CalendarDays size={16} className="text-white" />
                </div>
                
                <div className="flex md:w-1/2 md:pl-8 pl-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Physical Pilot (2022)</h3>
                    <p className="text-gray-600">
                      In 2022 we tested EcoLens with a physical pilot project: the EcoLens Challenge. Over 2–3 weeks, around 500 participants engaged across four EPFL cafeterias — FoodLab Native, FoodLab Alpine, Piano, and Ornithorynque — validating the concept with the campus community.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Digital pilot (2025) */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="flex md:w-1/2 md:pr-8 pr-8 pl-8 md:pl-0 items-center mb-4 md:mb-0">
                  <div>
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Digital App Pilot (2025)</h3>
                    <p className="text-gray-600">
                      In 2025 we ran a first digital pilot with the EcoLens app, reaching around 150 downloads and collecting real-world usage and impact data. These insights help us refine the experience and will be complemented with more detailed metrics as the project grows.
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <CalendarDays size={16} className="text-white" />
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://studentchallenge.ch/project/ecolens-raise-awareness-around-food-habits/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-eco-green-dark hover:text-eco-green font-medium">
              <Leaf className="mr-2" size={18} />
              EcoLens – Raise awareness around food habits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
