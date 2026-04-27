"use client";

import { useRef } from "react";
import Image from "next/image";

type PropertyItem = {
  title: string;
  count: string;
  img: string;
};

const data: PropertyItem[] = [
  {
    title: "Toronto",
    count: "",
    img: "/toronto.png",
  },
  {
    title: "Vancouver",
    count: "",
     img: "/vancouver.png",
  },
  {
    title: "Montreal",
    count: "",
    img: "/montreal.jpg",
  },
  {
    title: "Quebec City",
    count: "760 Properties",
    img: "/QuebecCity.png",
  },
];

export function TopDestination() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center flex-col px-4">
      <p className="font-['Vollkorn'] text-[28px] md:text-[42px] font-bold text-center">
       Popular Car Rental Destinations
      </p>

      <p className="font-['Montserrat'] text-[#5F5F5F] text-center whitespace-pre-line text-sm md:text-base max-w-2xl">
        {`Explore more options to rent a car across Canada at great prices`}
      </p>

      <div className="flex-grow-0 mt-5 flex-shrink-0 w-[120px] h-1 bg-[#f97101]" />

      {/* Wrapper */}
      <div className="flex items-center w-full mt-10 gap-3">
        
        {/* LEFT ARROW (unchanged design) */}
        <div
          onClick={() => scroll("left")}
          className="flex justify-start w-[50px] h-[50px] cursor-pointer ml-15 relative overflow-hidden gap-2.5 px-[22px] py-[17px] rounded bg-white"
          style={{ boxShadow: "0px 4px 12px 0 rgba(0,0,0,0.12)" }}
        >
            <svg
                width={12}
                height={21}
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0  scale-x-[-1]"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.251754 0.237262C0.171951 0.312281 0.108638 0.4014 0.0654373 0.499516C0.0222368 0.597631 0 0.702814 0 0.809041C0 0.915268 0.0222368 1.02045 0.0654373 1.11857C0.108638 1.21668 0.171951 1.3058 0.251754 1.38082L9.92985 10.5002L0.251754 19.6196C0.0908461 19.7712 0.000450134 19.9769 0.000450134 20.1914C0.000450134 20.4058 0.0908461 20.6115 0.251754 20.7632C0.412662 20.9148 0.630898 21 0.858456 21C1.08601 21 1.30425 20.9148 1.46516 20.7632L11.7482 11.072C11.828 10.997 11.8914 10.9079 11.9346 10.8097C11.9778 10.7116 12 10.6064 12 10.5002C12 10.394 11.9778 10.2888 11.9346 10.1907C11.8914 10.0926 11.828 10.0035 11.7482 9.92843L1.46516 0.237262C1.38556 0.162054 1.29099 0.102384 1.18689 0.0616703C1.08278 0.0209569 0.97117 0 0.858456 0C0.745741 0 0.634133 0.0209569 0.530025 0.0616703C0.425918 0.102384 0.331355 0.162054 0.251754 0.237262Z"
                fill="#A2A2A2"
                />
            </svg>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex justify-center gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar"
        >
          {data.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* RIGHT ARROW (unchanged design) */}
        <div
          onClick={() => scroll("right")}
          className="flex justify-start w-[50px] h-[50px] cursor-pointer right-15 relative overflow-hidden gap-2.5 px-[22px] py-[17px] rounded bg-white"
          style={{ boxShadow: "0px 4px 12px 0 rgba(0,0,0,0.12)" }}
        >
            <svg
                width={12}
                height={21}
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 "
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.251754 0.237262C0.171951 0.312281 0.108638 0.4014 0.0654373 0.499516C0.0222368 0.597631 0 0.702814 0 0.809041C0 0.915268 0.0222368 1.02045 0.0654373 1.11857C0.108638 1.21668 0.171951 1.3058 0.251754 1.38082L9.92985 10.5002L0.251754 19.6196C0.0908461 19.7712 0.000450134 19.9769 0.000450134 20.1914C0.000450134 20.4058 0.0908461 20.6115 0.251754 20.7632C0.412662 20.9148 0.630898 21 0.858456 21C1.08601 21 1.30425 20.9148 1.46516 20.7632L11.7482 11.072C11.828 10.997 11.8914 10.9079 11.9346 10.8097C11.9778 10.7116 12 10.6064 12 10.5002C12 10.394 11.9778 10.2888 11.9346 10.1907C11.8914 10.0926 11.828 10.0035 11.7482 9.92843L1.46516 0.237262C1.38556 0.162054 1.29099 0.102384 1.18689 0.0616703C1.08278 0.0209569 0.97117 0 0.858456 0C0.745741 0 0.634133 0.0209569 0.530025 0.0616703C0.425918 0.102384 0.331355 0.162054 0.251754 0.237262Z"
                fill="#A2A2A2"
                />
            </svg>
        </div>
      </div>
    </div>
  );
}

const Card = ({ item }: { item: PropertyItem }) => {
  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[385px] h-[380px] md:h-[448px] relative rounded-lg overflow-hidden">
      
      <Image
        alt={item.title}
        src={item.img}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-0 w-full h-[120px] md:h-[131px] bg-[#1f1f1f]/[0.63]" />

      <div className="absolute left-4 bottom-6 text-white">
        <p className="text-lg md:text-[26px] font-bold">{item.title}</p>
        <p className="text-sm md:text-base">{item.count}</p>
        <div className="w-6 h-px bg-[#d9d9d9] mt-2" />
      </div>
    </div>
  );
};