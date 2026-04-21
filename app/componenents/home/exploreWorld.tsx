"use client";

import React, { useState, useRef } from 'react';
import { MapPin, Globe, Mountain, Flag, TreePine, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';


type dir = "left" | "right";
const destinations = [
  {
    id: 1,
    name: 'Toronto',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
    location: 'Ontario, Canada'
  },
  {
    id: 2,
    name: 'Calgary',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
    location: 'Alberta, Canada'
  },
  {
    id: 3,
    name: 'Montreal Hotels',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    location: 'Quebec, Canada'
  },
  {
    id: 4,
    name: 'Québec City',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
    location: 'Quebec, Canada'
  },
  {
    id: 5,
    name: 'Vancouver',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1559511260-66a654ae98e2?w=600&h=400&fit=crop',
    location: 'British Columbia, Canada'
  },
  {
    id: 6,
    name: 'Ottawa',
    properties: '1282 Properties',
    image: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=600&h=400&fit=crop',
    location: 'Ontario, Canada'
  }
];

const categories = [
  { id: 'canada', label: 'Cities in Canada', icon: MapPin, active: true },
  { id: 'global', label: 'Global Cities', icon: Globe, active: false },
  { id: 'regions', label: 'Popular Regions', icon: Mountain, active: false },
  { id: 'countries', label: 'Top Countries', icon: Flag, active: false },
  { id: 'unique', label: 'Unique Stays', icon: TreePine, active: false }
];

const ExploreWorld = () => {
  const [activeCategory, setActiveCategory] = useState('canada');
  const [activeCard, setActiveCard] = useState(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: dir) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/exploreWorldBG.png"
          alt="Aerial beach view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Start Exploring The World
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Find Popular Destinations, Trending Cities, And Unforgettable Places To Stay.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14 px-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3964AE] text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-transparent text-gray-300 hover:bg-gray-700/80 hover:text-white backdrop-blur-sm border border-gray-700/50'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {destinations.map((dest) => {
              const isActive = activeCard === dest.id;
              return (
                <div
                  key={dest.id}
                  onClick={() => setActiveCard(dest.id)}
                  className={`flex-shrink-0 w-[280px] md:w-[300px] snap-center cursor-pointer group transition-all duration-300 ${
                    isActive ? 'scale-105' : 'scale-100 hover:scale-[1.02]'
                  }`}
                >
                  <div className="relative bg-transparent backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    {/* Image */}
                    <div className="flex justify-center items-center mt-5 h-40 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-65 rounded-xl h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute  inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      
                      {/* Active Indicator Dot */}
                      {isActive && (
                        <div className="absolute bottom-3 right-3 w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 h-25 relative">
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-orange-400 transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{dest.properties}</p>
                      
                      {/* <div className="flex justify-end">
                        <button className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <ArrowRight size={14} />
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex gap-2 mt-4 md:hidden">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className={`w-2 h-2 rounded-full transition-all ${
                activeCard === dest.id ? 'bg-orange-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ExploreWorld;