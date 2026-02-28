
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Library background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
        <h4 className="text-annahdah-gold font-semibold tracking-widest uppercase mb-4 animate-fade-in">
          Enlightenment through Knowledge
        </h4>
        <h1 className="text-4xl md:text-7xl text-white font-bold serif-font mb-6 leading-tight">
          Welcome to <span className="text-annahdah-gold italic">An-nahdah</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 font-light">
          Reviving the tradition of intellectual excellence, historical awareness, and community development. Discover our past to build your future.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#biographies"
            className="bg-annahdah-green hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-900/40"
          >
            Explore Biographies
          </a>
          <a
            href="#works"
            className="bg-white hover:bg-gray-100 text-annahdah-green px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
          >
            Our Major Works
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 73.3C840 86.7 960 113.3 1080 116.7C1200 120 1320 100 1380 90L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
