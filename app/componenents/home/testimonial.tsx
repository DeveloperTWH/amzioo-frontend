"use client";

import React, { useRef } from "react";

type Direction = "left" | "right";

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: Direction) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mb-6 max-w-md">
            Millions of travelers rely on our platform to plan their trips.
            Read verified reviews and ratings to find the best accommodations and services for your journey.
          </p>

          <div className="w-16 h-1 bg-orange-500 mb-6"></div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
            >
              <Arrow flipped />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded"
            >
              <Arrow />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth"
        >
          <TestimonialCard active />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};


/// Arrow Icon
const Arrow: React.FC<{ flipped?: boolean }> = ({ flipped }) => (
  <svg
    width={12}
    height={21}
    className={flipped ? "scale-x-[-1]" : ""}
    viewBox="0 0 12 21"
    fill="none"
  >
    <path
      d="M0.251754 0.237262C0.171951 0.312281 0.108638 0.4014 0.0654373 0.499516C0.0222368 0.597631 0 0.702814 0 0.809041C0 0.915268 0.0222368 1.02045 0.0654373 1.11857C0.108638 1.21668 0.171951 1.3058 0.251754 1.38082L9.92985 10.5002L0.251754 19.6196C0.0908461 19.7712 0.000450134 19.9769 0.000450134 20.1914C0.000450134 20.4058 0.0908461 20.6115 0.251754 20.7632C0.412662 20.9148 0.630898 21 0.858456 21C1.08601 21 1.30425 20.9148 1.46516 20.7632L11.7482 11.072C11.828 10.997 11.8914 10.9079 11.9346 10.8097C11.9778 10.7116 12 10.6064 12 10.5002C12 10.394 11.9778 10.2888 11.9346 10.1907C11.8914 10.0926 11.828 10.0035 11.7482 9.92843L1.46516 0.237262C1.38556 0.162054 1.29099 0.102384 1.18689 0.0616703C1.08278 0.0209569 0.97117 0 0.858456 0C0.745741 0 0.634133 0.0209569 0.530025 0.0616703C0.425918 0.102384 0.331355 0.162054 0.251754 0.237262Z"
      fill="currentColor"
    />
  </svg>
);


/// Card
const TestimonialCard: React.FC<{ active?: boolean }> = ({ active }) => {
  return (
    <div
      className={`min-w-[280px] md:min-w-[320px] rounded-lg p-6 border transition ${
        active
          ? "bg-[#eef2ff] border-blue-200"
          : "bg-white border-gray-200"
      }`}
    >
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/female-1.png"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold">Grace Turner</p>
          <p className="text-sm text-gray-500">Businessman</p>
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Quote */}
      <div className="text-right text-3xl mt-4 text-blue-500">“</div>
    </div>
  );
};