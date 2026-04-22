"use client"
import { useState } from "react";
import carIcon from "@/public/carIcon.png"
import flightIcon from "@/public/flightIcon.png"
import hotelIcon from "@/public/hotelIcon.png"
import vector from "@/public/vector.svg"
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const tabs = [
  {
    id: "hotels",
    label: "Hotels",
    icon: hotelIcon,
    iconWidth: "w-8",
    iconHeight: "h-8",
    active: true,
  },
  {
    id: "flights",
    label: "Flights",
    icon: flightIcon,
    iconWidth: "w-8",
    iconHeight: "h-8",
    active: false,
  },
  {
    id: "rental-cabs",
    label: "Rental Cabs",
    icon: carIcon,
    iconWidth: "w-[43px]",
    iconHeight: "h-8",
    active: false,
  },
];

export const SearchPanel = ()=> {
  const [activeTab, setActiveTab] = useState("hotels");
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [guests, setGuests] = useState("");
  const [priceRange, setPriceRange] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);

const [price, setPrice] = useState({
  min: 0,
  max: 5000,
});

const formatPrice = (value: number) => `$${value.toLocaleString()}`;

const priceText =
  price.min === 0 && price.max === 0
    ? ""
    : `${formatPrice(price.min)} - ${formatPrice(price.max)}`;

    const [showGuestDropdown, setShowGuestDropdown] = useState(false);

const [guestCounts, setGuestCounts] = useState({
  adults: 2,
  children: 0,
  rooms: 1,
});

const updateGuests = (type: "adults" | "children" | "rooms", value: number) => {
  setGuestCounts((prev) => ({
    ...prev,
    [type]: Math.max(type === "children" ? 0 : 1, prev[type] + value),
  }));
};

const guestText = `${guestCounts.adults} Adult${guestCounts.adults > 1 ? "s" : ""} · 
${guestCounts.children} Child${guestCounts.children !== 1 ? "ren" : ""} · 
${guestCounts.rooms} Room${guestCounts.rooms > 1 ? "s" : ""}`;

  return (
    <div className="relative mx-auto w-full  max-w-[1700px] px-4 sm:px-6 lg:px-0">
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
                  <Image
                    className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                    alt="Mask group"

                    src={tab.icon}
                  />
                  <div className="relative w-fit [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-[#3964ae] text-xl tracking-[0] leading-5 whitespace-nowrap">
                    {tab.label}
                  </div>
                </button>
                <img
                  className="relative w-[30px] h-[13px]"
                  alt="Rectangle"
                  // src={rectangle227}
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
                <Image
                  className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                  alt="Mask group"
                  src={tab.icon}
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
            {/* <input
              type="text"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              placeholder="Dd/mm/yyyy  -  Dd/mm/yyyy"
              aria-label="Check In & Check Out"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            /> */}
            <div className="flex flex-row">
              <DatePicker selected={startDate} 
              className="mt-8 ml-4 font-['Montserrat']"
              />
              <DatePicker selected={startDate} 
              className="mt-8 ml-4 font-['Montserrat']"
              />
            </div>
       
            <label className="absolute top-0 left-px [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Check In &amp; Check Out
            </label>
          </div>
<div className="relative h-[71px] w-full md:w-[324.5px]">
  <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border" />

  {/* Input (readonly trigger) */}
  <input
    type="text"
    value={guestText}
    readOnly
    onClick={() => setShowGuestDropdown((prev) => !prev)}
    placeholder=" 2 Adults · 0 Children · 1 Room"
    className="absolute top-[23px] left-px h-12 w-full bg-transparent outline-none px-3 font-semibold text-[#5f5f5f] text-[13px] cursor-pointer"
  />

  <label className="absolute top-0 left-0 text-white text-sm font-semibold">
    Number Of Guests
  </label>

  {/* Arrow */}
  <div className="absolute top-[41px] right-3 h-3.5 w-3.5 flex pointer-events-none">
    <img className="flex-1 w-[10.15px]" alt="Vector" src={vector} />
  </div>

  {/* Dropdown */}
  {showGuestDropdown && (
    <div className="absolute z-50 top-[75px] left-0 w-full bg-white rounded-lg shadow-lg p-4 space-y-4">

      {/* Row Component */}
      {[
        { label: "Adults", key: "adults" },
        { label: "Children", key: "children" },
        { label: "Rooms", key: "rooms" },
      ].map((item) => (
        <div key={item.key} className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">
            {item.label}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => updateGuests(item.key as any, -1)}
              className="w-7 h-7 rounded bg-gray-200 text-lg"
            >
              -
            </button>

            <span className="w-6 text-center">
              {guestCounts[item.key as keyof typeof guestCounts]}
            </span>

            <button
              onClick={() => updateGuests(item.key as any, 1)}
              className="w-7 h-7 rounded bg-gray-200 text-lg"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Done Button */}
      <button
        onClick={() => setShowGuestDropdown(false)}
        className="w-full mt-2 py-2 bg-[#3964ae] text-white rounded"
      >
        Done
      </button>
    </div>
  )}
</div>
<div className="relative h-[71px] w-full md:w-[284px] price-container">
  <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border" />

  {/* Input trigger */}
  <input
    type="text"
    value={priceText}
    readOnly
    onClick={() => setShowPriceDropdown((prev) => !prev)}
    placeholder="-- Choose Range --"
    className="absolute top-[23px] left-px h-12 w-full bg-transparent outline-none px-3 font-semibold text-[#5f5f5f] text-[13px] cursor-pointer"
  />

  <label className="absolute top-0 left-0 text-white text-sm font-semibold">
    Filter By Price
  </label>

  {/* Dropdown */}
  {showPriceDropdown && (
    <div className="absolute z-50 top-[75px] left-0 w-full bg-white rounded-lg shadow-lg p-4 space-y-4">

      {/* Preset options */}
      <div className="space-y-2 font-[Montserrat]">
        {[
          { min: 0, max: 2000 },
          { min: 2000, max: 5000 },
          { min: 5000, max: 10000 },
        ].map((range, i) => (
          <button
            key={i}
            onClick={() => {
              setPrice(range);
              setShowPriceDropdown(false);
            }}
            className="w-full text-left px-2 py-1 font-[Montserrat] hover:bg-gray-100 rounded text-sm"
          >
            {formatPrice(range.min)} - {formatPrice(range.max)}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t" />

      {/* Custom Range */}
      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-700">
          Custom Range
        </div>

        {/* Min */}
        <input
          type="range"
          min={0}
          max={10000}
          step={500}
          value={price.min}
          onChange={(e) =>
            setPrice((prev) => ({
              ...prev,
              min: Number(e.target.value),
            }))
          }
          className="w-full "
        />

        {/* Max */}
        <input
          type="range"
          min={0}
          max={10000}
          step={500}
          value={price.max}
          onChange={(e) =>
            setPrice((prev) => ({
              ...prev,
              max: Number(e.target.value),
            }))
          }
          className="w-full"
        />

        <div className="text-xs font-[Montserrat] text-gray-600">
          {priceText}
        </div>
      </div>

      {/* Apply */}
      <button
        onClick={() => setShowPriceDropdown(false)}
        className="w-full mt-2 py-2 bg-[#3964ae] text-white rounded"
      >
        Apply
      </button>
    </div>
  )}
</div>

          <button
             className="box-border inline-flex px-12 py-3.5 sm:w-auto sm:justify-end flex-[0_0_auto] bg-[#f97101] rounded items-center relative cursor-pointer"
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
