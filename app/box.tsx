"use client"
import { useState } from "react";
// import image1 from "./image.png";
// import image from "./image.svg";
// import maskGroup from "./mask-group.png";
// import maskGroup2 from "./mask-group-2.png";
// import rectangle227 from "./rectangle-227.svg";
// import vector from "./vector.svg";
import vector from "../public/vector.svg"

const tabs = [
  {
    id: "hotels",
    label: "Hotels",
    // icon: maskGroup,
    iconWidth: "w-8",
    iconHeight: "h-8",
    active: true,
  },
  {
    id: "flights",
    label: "Flights",
    // icon: image1,
    iconWidth: "w-8",
    iconHeight: "h-8",
    active: false,
  },
  {
    id: "rental-cabs",
    label: "Rental Cabs",
    // icon: maskGroup2,
    iconWidth: "w-[43px]",
    iconHeight: "h-8",
    active: false,
  },
];

export const Box = ()=> {
  const [activeTab, setActiveTab] = useState("hotels");
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [guests, setGuests] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className="relative mx-auto w-full max-w-[1598px] px-4 sm:px-6 lg:px-0">
      <div className="relative w-full">
        <div className="relative flex w-full flex-wrap items-start justify-center gap-3">
          {tabs.map((tab) =>
            tab.id === "hotels" ? (
              <div
                key={tab.id}
                className="inline-flex flex-col items-center relative flex-[0_0_auto]"
              >
                <button
                  className="all-[unset] box-border flex w-full min-w-[180px] justify-center gap-5 px-6 py-4 sm:w-64 sm:px-[46px] flex-[0_0_auto] bg-white rounded-[42px] border border-solid items-center relative cursor-pointer"
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                  aria-label={tab.label}
                >
                  <img
                    className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                    alt="Mask group"
                    // src={tab.icon}
                  />
                  <div className="relative w-fit [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-[#3964ae] text-xl tracking-[0] leading-5 whitespace-nowrap">
                    {tab.label}
                  </div>
                </button>
                <img
                  className="relative w-[30px] h-[13px]"
                  alt="Rectangle"
                //   src={rectangle227}
                />
              </div>
            ) : (
              <button
                key={tab.id}
                className="all-[unset] box-border flex w-full min-w-[180px] justify-center gap-5 px-6 py-4 sm:w-64 sm:px-[46px] bg-[#f5f5f53d] rounded-[42px] shadow-[0px_4px_8px_#00000033] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] items-center relative cursor-pointer"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                aria-label={tab.label}
              >
                <img
                  className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                  alt="Mask group"
                //   src={tab.icon}
                />
                <div className="relative w-fit [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                  {tab.label}
                </div>
              </button>
            ),
          )}
        </div>
        <div className="mt-4 flex w-full flex-wrap items-end justify-center gap-[11px_11px] rounded-xl bg-[#3964ae] px-4 py-6 shadow-[0px_6px_24px_#00020547] sm:px-6 lg:px-10 lg:py-8">
          <div className="relative h-[71px] w-full md:w-[404.5px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location, City, Or Any Specific Hotel"
              aria-label="Location"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
            <label className="absolute top-0 left-px w-[155px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Location
            </label>
          </div>
          <div className="relative h-[71px] w-full md:w-[324px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              placeholder="Dd/mm/yyyy  -  Dd/mm/yyyy"
              aria-label="Check In & Check Out"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
            <label className="absolute top-0 left-px [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Check In &amp; Check Out
            </label>
          </div>
          <div className="relative h-[71px] w-full md:w-[324.5px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder=" 2 Adults · 0 Children · 1 Room"
              aria-label="Number Of Guests"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
            <label className="absolute top-0 left-0 [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Number Of Guests
            </label>
            <div className="absolute top-[41px] right-3 h-3.5 w-3.5 flex pointer-events-none">
              <img className="flex-1 w-[10.15px]" alt="Vector" src={vector} />
            </div>
          </div>
          <div className="relative h-[71px] w-full md:w-[284px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              placeholder="-- Choose Range --"
              aria-label="Filter By Price"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
            <div className="absolute top-[41px] right-3 h-3.5 w-3.5 flex pointer-events-none">
              {/* <img className="flex-1 w-[10.15px]" alt="Vector" src={image} /> */}
            </div>
            <label className="absolute top-0 left-0 [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Filter By Price
            </label>
          </div>

          <button
             className="all-[unset] box-border inline-flex w-full  gap-2.5 px-12 py-3.5 sm:w-auto sm:justify-end flex-[0_0_auto] bg-[#f97101] rounded items-center relative cursor-pointer"
            type="button"
            aria-label="Search"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 whitespace-nowrap">
              Search
            </div>
          </button>
  

        </div>
      </div>
    </div>
  );
};
