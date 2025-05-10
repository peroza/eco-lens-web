
import React from 'react';
import { History as HistoryIcon, CalendarDays, Award, Building, Leaf } from 'lucide-react';

const History = () => {
  return (
    <section id="history" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">History</h2>
        <p className="section-subtitle">
          The journey of EcoLens from concept to reality
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-eco-mint"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {/* Origin */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex md:flex-row-reverse md:w-1/2 md:pr-8 md:pl-0 pl-8 items-center mb-4 md:mb-0">
                  <div className="md:ml-8 md:text-right">
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Project Origins</h3>
                    <p className="text-gray-600">
                      EcoLens was born from a collaboration with DLAB, led by Prof. Robert West, and PhD student Kristina Gligoric. The initial development of the app began as a semester project by Master's student Andrea Perozziello at EPFL.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
                  <HistoryIcon size={16} className="text-white" />
                </div>
                
                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Physical pilot */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right"></div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
                  <CalendarDays size={16} className="text-white" />
                </div>
                
                <div className="flex md:w-1/2 md:pl-8 pl-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Physical Pilot Project</h3>
                    <p className="text-gray-600">
                      Before launching the digital platform, we first tested the concept with a physical pilot project: EcoLens Challenge. Held over 2–3 weeks in four EPFL cafeterias: FoodLab Native, FoodLab Alpine, Piano, and Ornithorynque.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Challenge details */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex md:flex-row-reverse md:w-1/2 md:pr-8 md:pl-0 pl-8 items-center mb-4 md:mb-0">
                  <div className="md:ml-8 md:text-right">
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Challenge Mechanism</h3>
                    <p className="text-gray-600">
                      The goal was to encourage students to make more sustainable food choices by selecting A or B-rated menus. Participants who chose these options received stickers, which they placed on a team map in each cafeteria along with their team name and student number.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
                  <Building size={16} className="text-white" />
                </div>
                
                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Rewards */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right"></div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/3 md:-translate-x-1/2 w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
                
                <div className="flex md:w-1/2 md:pl-8 pl-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-eco-green-dark mb-2">Rewards & Partnerships</h3>
                    <p className="text-gray-600">
                      At the end of the challenge, winners were randomly selected from all participants and received prizes during Vivapoly. The rewards were carefully chosen to promote conscious consumption initiatives on campus, such as EpiLibre and Vorace (zero-waste shops) and Limoo, a startup delivering plant-based gastronomy to EPFL.
                    </p>
                  </div>
                </div>
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
