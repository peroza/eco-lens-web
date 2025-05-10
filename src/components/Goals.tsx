
import React from 'react';
import { Leaf, Award, Users } from "lucide-react";

const Goals = () => {
  return (
    <section id="goals" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Goals</h2>
        <p className="section-subtitle">
          Promoting sustainable food consumption within institutional communities
        </p>
        
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            EcoLens is an app designed to promote sustainable food consumption within institutional communities.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-eco-mint rounded-full p-3 text-eco-green-dark shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">Community Engagement</h3>
                <p className="text-gray-600">
                  Users log their meals, participate in friendly competitions, and engage in educational quizzes through interactive games and challenges.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-eco-mint rounded-full p-3 text-eco-green-dark shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">Rewards & Recognition</h3>
                <p className="text-gray-600">
                  By making conscious food choices, they earn points, climb the leaderboard, and unlock rewards, all while contributing to their faculty's overall sustainability score.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-eco-mint rounded-full p-3 text-eco-green-dark shrink-0">
                <Leaf size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-eco-green-dark">Environmental Impact</h3>
                <p className="text-gray-600">
                  Through this collective effort, EcoLens fosters greater environmental awareness and encourages long-term sustainable habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
