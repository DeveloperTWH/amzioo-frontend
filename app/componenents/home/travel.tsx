"use client";

import React, { useRef } from "react";

type Direction = "left" | "right";

export const Travel = ({img} : {img: string}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: Direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-320 mx-auto px-4 py-12  relative">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Travel Insights To Inspire Your Next Journey
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded bg-white shadow-md"
      >
        <ArrowIcon flipped />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded bg-white shadow-md"
      >
        <ArrowIcon />
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 ms-10 me-10 overflow-x-auto md:overflow-hidden scroll-smooth"
      >
        <CardWrapper><TravelCard img={img} /></CardWrapper>
        <CardWrapper><TravelCard img={img} /></CardWrapper>
        <CardWrapper><TravelCard img={img} /></CardWrapper>
        <CardWrapper><TravelCard img={img} /></CardWrapper>
      </div>
    </div>
  );
};


// ✅ Arrow Icon Component
type ArrowIconProps = {
  flipped?: boolean;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({ flipped }) => {
  return (
    <svg
      width={12}
      height={21}
      className={flipped ? "scale-x-[-1]" : ""}
      viewBox="0 0 12 21"
      fill="none"
    >
      <path
        d="M0.251754 0.237262C0.171951 0.312281 0.108638 0.4014 0.0654373 0.499516C0.0222368 0.597631 0 0.702814 0 0.809041C0 0.915268 0.0222368 1.02045 0.0654373 1.11857C0.108638 1.21668 0.171951 1.3058 0.251754 1.38082L9.92985 10.5002L0.251754 19.6196C0.0908461 19.7712 0.000450134 19.9769 0.000450134 20.1914C0.000450134 20.4058 0.0908461 20.6115 0.251754 20.7632C0.412662 20.9148 0.630898 21 0.858456 21C1.08601 21 1.30425 20.9148 1.46516 20.7632L11.7482 11.072C11.828 10.997 11.8914 10.9079 11.9346 10.8097C11.9778 10.7116 12 10.6064 12 10.5002C12 10.394 11.9778 10.2888 11.9346 10.1907C11.8914 10.0926 11.828 10.0035 11.7482 9.92843L1.46516 0.237262C1.38556 0.162054 1.29099 0.102384 1.18689 0.0616703C1.08278 0.0209569 0.97117 0 0.858456 0C0.745741 0 0.634133 0.0209569 0.530025 0.0616703C0.425918 0.102384 0.331355 0.162054 0.251754 0.237262Z"
        fill="#A2A2A2"
      />
    </svg>
  );
};


// ✅ Card Wrapper
type CardWrapperProps = {
  children: React.ReactNode;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => (
  <div className="min-w-[70%] sm:min-w-[45%] lg:min-w-[30%]">
    {children}
  </div>
);


// ✅ Travel Card
type TravelCardProps = {
  img: string;
};

const TravelCard: React.FC<TravelCardProps> = ({ img }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      
      <div className="w-full h-56">
        <img
          src={img}
          alt="travel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-[#404959] mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};