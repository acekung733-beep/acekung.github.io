
import React from 'react';
import { Biography } from '../types';

const bios: Biography[] = [
  {
    id: '1',
    name: 'Ibn Khaldun',
    title: 'Founder of Modern Sociology',
    image: 'https://picsum.photos/seed/ibn/600/800',
    category: 'Scholar',
    bio: 'Renowned for his monumental work, the Muqaddimah, Ibn Khaldun paved the way for historiography and the social sciences.'
  },
  {
    id: '2',
    name: 'Fatima al-Fihri',
    title: 'Visionary Educator',
    image: 'https://picsum.photos/seed/fatima/600/800',
    category: 'Pioneer',
    bio: 'Founder of the University of al-Qarawiyyin, the oldest continually operating educational institution in the world.'
  },
  {
    id: '3',
    name: 'Al-Farabi',
    title: 'The Second Teacher',
    image: 'https://picsum.photos/seed/farabi/600/800',
    category: 'Philosopher',
    bio: 'A preeminent philosopher and scientist who bridged ancient Greek thought with the intellectual traditions of the Islamic Golden Age.'
  },
  {
    id: '4',
    name: 'Rabia al-Adawiyya',
    title: 'Sufi Mystic',
    image: 'https://picsum.photos/seed/rabia/600/800',
    category: 'Spiritualist',
    bio: 'An influential figure in Sufism, known for her devotion and teachings on the pure love of the Divine.'
  }
];

const Biographies: React.FC = () => {
  return (
    <section id="biographies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-annahdah-gold uppercase tracking-widest font-bold mb-4">Historical Archives</h2>
        <h3 className="text-4xl md:text-5xl font-bold serif-font text-gray-900 mb-6">Pioneers of Thought</h3>
        <div className="w-24 h-1 bg-annahdah-gold mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto italic">
          "The past is the mirror to our future." - Explore the lives of those who shaped civilizations and left an indelible mark on humanity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bios.map((person) => (
            <div key={person.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="object-cover w-full h-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-annahdah-gold text-sm font-semibold uppercase tracking-widest">{person.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold serif-font mb-1 text-gray-900">{person.name}</h4>
                <p className="text-annahdah-green text-sm font-medium mb-3">{person.title}</p>
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biographies;
