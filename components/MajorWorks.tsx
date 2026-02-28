
import React from 'react';
import { Work } from '../types';

const projects: Work[] = [
  {
    id: '1',
    title: 'The Literacy Awakening',
    date: 'Spring 2024',
    category: 'Education',
    description: 'A nationwide initiative focused on reviving classical reading traditions and improving research methodologies in local schools.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Preservation of Manuscripts',
    date: 'Ongoing',
    category: 'Archive',
    description: 'Digitizing and restoring centuries-old scientific texts to make them accessible to modern scholars worldwide.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Community Ethics Workshop',
    date: 'Winter 2023',
    category: 'Community',
    description: 'Seminars designed to foster leadership, social responsibility, and civic engagement based on historical ethical frameworks.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  }
];

const MajorWorks: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-annahdah-gold uppercase tracking-widest font-bold mb-4">Milestones</h2>
            <h3 className="text-4xl font-bold serif-font text-gray-900 leading-tight">Key Activities & Major Projects</h3>
          </div>
          <p className="text-gray-600 max-w-sm mb-2">
            An-nahdah is committed to practical application of knowledge through meaningful community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full shadow-md">
                  <span className="text-xs font-bold text-annahdah-green uppercase">{item.category}</span>
                </div>
              </div>
              <span className="text-sm text-gray-400 mb-2 block">{item.date}</span>
              <h4 className="text-2xl font-bold serif-font mb-4 group-hover:text-annahdah-green transition-colors">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <a href="#" className="inline-flex items-center text-annahdah-gold font-bold uppercase tracking-wider text-sm hover:translate-x-2 transition-transform">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MajorWorks;
