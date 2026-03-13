
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Goals from '@/components/Goals';
import Stakeholders from '@/components/Stakeholders';
import History from '@/components/History';
import AppScreenshots from '@/components/AppScreenshots';
import Support from '@/components/Support';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Goals />
        <Stakeholders />
        <History />
        <AppScreenshots />
        <Support />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
