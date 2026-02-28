
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biographies from './components/Biographies';
import Policies from './components/Policies';
import MajorWorks from './components/MajorWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Biographies />
        <MajorWorks />
        <Policies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
