
import React from 'react';
import { Building2, Users, Store } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Stakeholders = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="stakeholders" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Stakeholders</h2>
        <p className="section-subtitle">
          Creating a sustainable ecosystem with benefits for all participants
        </p>
        
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 transition-opacity transition-transform duration-500 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Institutions */}
          <div className="eco-card card-animated hover:border-eco-green hover:border-2 group">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4 transition-transform duration-200 group-hover:scale-110">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-eco-green-dark">Institutions</h3>
            </div>
            <p className="text-gray-600 text-center">
              Host the game to engage their communities in sustainable eating habits, fostering awareness and reducing their collective food-related environmental footprint.
            </p>
          </div>
          
          {/* Players */}
          <div className="eco-card card-animated hover:border-eco-green hover:border-2 group">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4 transition-transform duration-200 group-hover:scale-110">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-eco-green-dark">Players</h3>
            </div>
            <p className="text-gray-600 text-center">
              Learn about sustainable eating while participating in fun and rewarding eco-friendly challenges.
            </p>
          </div>
          
          {/* Eco-companies */}
          <div className="eco-card card-animated hover:border-eco-green hover:border-2 group">
            <div className="mb-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-eco-mint-light text-eco-green-dark mb-4 transition-transform duration-200 group-hover:scale-110">
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
