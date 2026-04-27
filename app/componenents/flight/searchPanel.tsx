"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";
import carIcon from "@/public/carIcon.png"
import flightIcon from "@/public/flightIconBlue.png"
import hotelIcon from "@/public/hotelIconWhite.png"
import Link from "next/link";
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
export const FlightSearchPanel = () => {

   const [startDate, setStartDate] = useState(new Date());

    return(

      <div className="relative mx-auto w-full  max-w-[1700px] px-4 sm:px-6 lg:px-0">
   

        <div className="relative flex w-full flex-wrap items-start justify-center gap-3">
    
          {tabs.map((tab) =>
            tab.id === "flights" ? (
              <div
                key={tab.id}
                className="inline-flex flex-col items-center relative flex-[0_0_auto]"
              >

                <div className="bg-[url('/panelSelectBG.png')] bg-cover bg-center h-[76px] w-[256px] flex justify-center flex-row items-center gap-5 px-6 pb-3">
                  <Image
                  className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                  alt="Mask group"
                  src={tab.icon}
                />
                <div className="relative w-fit font-catamaran font-semibold text-[#3964AE] text-xl tracking-[0] leading-5 whitespace-nowrap">
                  {tab.label}
                </div>
                </div>
  
              </div>
            ) : (
              <Link
                key={tab.id}
                className="all-[unset] box-border flex w-full min-w-[180px] justify-center gap-5 px-6 py-4 sm:w-64 sm:px-[46px] bg-[#f5f5f53d] rounded-[42px] shadow-[0px_4px_8px_#00000033] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] items-center relative cursor-pointer"
                href={tab.id === "hotels" ? "/home" : "/car/landing"}
              >
                <Image
                  className={`relative ${tab.iconWidth} ${tab.iconHeight}`}
                  alt="Mask group"
                  src={tab.icon}
                />
                <div className="relative w-fit font-catamaran font-semibold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                  {tab.label}
                </div>
              </Link>
            ),
          )}
        </div>



        <div className="rounded-xl bg-[#3964ae] shadow-[0px_6px_24px_#00020547]">
        <div className="mt-4 grid w-full 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-[1fr_40px_1fr_1fr_1fr_1fr_auto]
          items-end justify-center gap-[11px]  sm:px-6  px-4   lg:px-10 lg:pt-4">          
          <div className="relative h-[71px] lg:w-[290px] md:w-[324px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
              placeholder="City"
              aria-label="Location"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
            <label className="absolute top-0 left-px w-[155px] [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Departure From
            </label>
  
          </div>
          <div className="flex items-center justify-center">
            <img
              src={"/ArrowLeftRight.png"}
              alt="Arrow"
              // className="w-full h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
            />
          </div>
          <div className="relative h-[71px] lg:w-[280px]  md:w-[324px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <input
              type="text"
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
              placeholder="City"
              aria-label="Location"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent rounded border-0 outline-none px-3 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#5f5f5f] text-[13px] tracking-[0] leading-[normal] placeholder:text-[#5f5f5f]"
            />
       
            <label className="absolute top-0 left-px [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Arriving To
            </label>
          </div>

          <div className="relative h-[71px] lg:w-[280px] md:w-[324px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border border-solid" />
            <div className="flex justify-between flex-row">
              <DatePicker selected={startDate} 
              className="mt-8 ml-2 w-30 font-montserrat"
              />
              <DatePicker selected={startDate} 
              className="mt-8 w-30 font-montserrat"
              />
            </div>
        
            <label className="absolute top-0 left-px [font-family:'Catamaran-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
              Check In &amp; Check Out
            </label>
          </div>
          <div className="relative h-[71px]  lg:w-[280px] md:w-[324.5px]">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border" />

            {/* Input (readonly trigger) */}
            <input
              type="text"
              // value={guestText}
              readOnly
              // onClick={() => setShowGuestDropdown((prev) => !prev)}
              placeholder=" 2 Adults · 0 Children · 1 Room"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent outline-none px-3 font-semibold text-[#5f5f5f] text-[13px] cursor-pointer"
            />

            <label className="absolute top-0 left-0 text-white text-sm font-semibold">
              Number Of Guests
            </label>

            {/* Arrow */}
            <div className="absolute top-[41px] right-3 h-3.5 w-3.5 flex pointer-events-none">
              <img className="flex-1 w-[10.15px]" alt="Vector" 
              // src={vector}
              />
            </div>

            {/* Dropdown */}

          </div>

          <div className="relative h-[71px] w-full md:w-[284px] price-container">
            <div className="absolute top-[23px] left-px h-12 w-full bg-white rounded border" />

            {/* Input trigger */}
            <input
              type="text"
              // value={priceText}
              readOnly
              // onClick={() => setShowPriceDropdown((prev) => !prev)}
              placeholder="-- Choose Range --"
              className="absolute top-[23px] left-px h-12 w-full bg-transparent outline-none px-3 font-semibold text-[#5f5f5f] text-[13px] cursor-pointer"
            />

            <label className="absolute top-0 left-0 text-white text-sm font-semibold">
              Filter By Price
            </label>

            {/* Dropdown */}

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
        
       <div className="px-4 py-5 flex flex-row gap-5 items-center">
        <div className="flex gap-2">
          <input type="radio" />
          <label className="font-montserrat font-semibold text-white">Round Trip</label>
        </div>

        <div className="flex gap-2">
          <input type="radio" />
          <label className="font-montserrat font-semibold text-white">One-way</label>
        </div>

        
        <div className="flex gap-2">
          <input type="radio" />
          <label className="font-montserrat font-semibold text-white">Multi City</label>
        </div>

        <div className="flex gap-2">
          <input type="radio" />
          <label className="font-montserrat font-semibold text-white">Direct Flight Only</label>
        </div>

        
        </div>
      </div>        
  
  
      </div>

)
}