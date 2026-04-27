"use client";

import Image from "next/image";

type CarType = {
  title: string;
  desc: string;
  img: string;
  features: string[];
};

const cars: CarType[] = [
  {
    title: "Economy",
    desc: "Affordable And Fuel-Efficient Cars, Perfect For City Driving And Short Trips.",
    img: "/cars/car1.png",
    features: ["4–5 Seats", "Great Mileage"],
  },
  {
    title: "Sedans",
    desc: "Ideal For Small Families Or Business Trips With Extra Comfort And Space.",
    img: "/cars/car2.png",
    features: ["4–5 Seats", "Extra Luggage Space"],
  },
  {
    title: "SUVs",
    desc: "Spacious And Powerful Vehicles For Road Trips, Rough Terrains, And Family Travel.",
    img: "/cars/car3.png",
    features: ["5–7 Seats", "Large Luggage Capacity"],
  },
  {
    title: "Luxury",
    desc: "Travel In Style With High-End Vehicles Offering Top Comfort And Performance.",
    img: "/cars/car4.png",
    features: ["Adv Features", "Superior Comfort"],
  },
];

export default function PerfectRide() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Choose Your Perfect Ride
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
          From Budget-Friendly Options To Premium Vehicles, Find The Right Car
          For Every Journey And Travel Style.
        </p>

        <div className="w-16 h-[3px] bg-orange-500 mx-auto mt-4 rounded-full" />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="group min-w-[260px] rounded-xl p-5 h-100 shadow-md bg-white text-gray-800 
                         transition-all duration-300 hover:h-110 hover:bg-[#1f1f1f] hover:text-white"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={car.img}
                  alt={car.title}
                  width={220}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                {car.title}
              </h3>

              {/* Description */}
              <p className="text-sm mt-2 text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                {car.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mt-4 text-xs">
                {car.features.map((f, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-gray-100 text-gray-700 
                               transition-all duration-300 
                               group-hover:bg-gray-700 group-hover:text-white"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Button (appears on hover) */}
              <button
                className="mt-12 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full text-sm 
                           opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-300"
              >
                Explore Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}