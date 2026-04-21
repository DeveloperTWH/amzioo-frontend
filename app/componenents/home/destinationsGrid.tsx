import React from "react";

const destinations = [
  {
    name: "Toronto",
    image: "/toronto.png",
  },
  {
    name: "Vancouver",
    image: "/vancouver.png",
  },
  {
    name: "Montreal",
    image: "/montreal.jpg",
    highlight: false,
    // description:
    //   "A Vibrant City Famous For Its French Culture, Festivals, And Historic Streets.",
  },
  {
    name: "Quebec City",
    image: "/QuebecCity.png",
    highlight : true,
  },
  {
    name: "Ottawa",
    image: "/Ottawa.png",
          highlight : true,
  },
  {
    name: "Calgary",
    image: "/Calgary.png",

  },
  {
    name: "Niagara Falls",
    image: "/niagarafalls.png",
  },
  {
    name: "Banff",
    image: "/Banff.png",
  },
];

export  function DestinationsGrid() {
  return (
    <div className="min-h-screen mt-20 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Explore Popular Destinations
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Discover The World's Most Loved Travel Destinations. From Vibrant Cities
            To Relaxing Beach Escapes, Find The Perfect Place For Your Next Adventure.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-5">
          {destinations.map((item, index) => (
            <div
              key={index}
           
              className={`relative rounded-xl h-50 overflow-hidden group cursor-pointer
                ${item.highlight ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {item.highlight && (
                  <p className="text-xs mt-1 opacity-90">
                    {/* {item.description} */}
                  </p>
                )}
              </div>

              {item.highlight && (
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white px-3 py-1 text-xs rounded">
                  120 Hotels
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
