import React from 'react';
import { Plus } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  // Image links based on the visual content of your screenshot
  const gallery = [
    { id: 1, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400", width: "w-24 md:w-32" },
    { id: 2, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400", width: "w-64 md:w-80" },
    { id: 3, src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400", width: "w-64 md:w-80" },
    { id: 4, src: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=400", width: "w-64 md:w-80" },
    { id: 5, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400", width: "w-64 md:w-80", isAdd: true },
    { id: 6, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400", width: "w-64 md:w-80" },
    { id: 7, src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400", width: "w-24 md:w-32" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* 1. Header & Newsletter Input */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-500 max-w-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua.
        </p>

        {/* Input Field: Button inside the border */}
        <div className="relative w-full max-w-2xl flex items-center p-1 border-2 border-gray-200 rounded-full bg-white focus-within:border-orange-400 transition-colors">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-grow bg-transparent px-6 py-3 text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button className="bg-[#f97101] hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition-all shadow-md active:scale-95">
            Join Now
          </button>
        </div>
      </div>

      {/* 2. Filmstrip Gallery */}
      <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar justify-start lg:justify-center">
        {gallery.map((item) => (
          <div
            key={item.id}
            className={`relative flex-shrink-0 h-[300px] md:h-[350px] ${item.width} rounded-2xl overflow-hidden group`}
          >
            <img
              src={item.src}
              alt="Gallery"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.isAdd ? 'blur-sm brightness-75' : ''}`}
            />
            
            {/* The "+" Add Button Overlay */}
            {item.isAdd && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 border-2 border-dashed border-white/80 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/10">
                  <Plus className="text-white" size={32} strokeWidth={2.5} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterSection;