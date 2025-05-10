
import React from 'react';
import { Building2, Users, Store } from 'lucide-react';

const Stakeholders = () => {
  return (
    <section id="stakeholders" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Stakeholders</h2>
        <p className="section-subtitle">
          Creating a sustainable ecosystem with benefits for all participants
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Institutions */}
          <div className="eco-card hover:border-eco-green hover:border-2 group transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-eco-green-dark">Institutions</h3>
            </div>
            <p className="text-gray-600 text-center">
              Host the game to engage their communities in sustainable eating habits, fostering awareness and reducing their collective food-related environmental footprint.
            </p>
          </div>
          
          {/* Players */}
          <div className="eco-card hover:border-eco-green hover:border-2 group transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-eco-green-dark">Players</h3>
            </div>
            <p className="text-gray-600 text-center">
              Learn about sustainable eating while participating in fun and rewarding eco-friendly challenges.
            </p>
          </div>
          
          {/* Eco-companies */}
          <div className="eco-card hover:border-eco-green hover:border-2 group transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4">
                <Store size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-eco-green-dark">Eco-companies</h3>
            </div>
            <p className="text-gray-600 text-center">
              Sustainable food companies benefit by gaining visibility and customers through sponsorships, as users redeem in kind rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
