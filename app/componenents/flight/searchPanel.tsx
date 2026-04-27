"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FlightSearchPanel = () => {

   const [startDate, setStartDate] = useState(new Date());

    return(

      <div className="relative mx-auto w-full  max-w-[1700px] px-4 sm:px-6 lg:px-0">
      {/* <div className="relative w-full"> */}

        {/* <div className="relative flex w-full flex-wrap items-start justify-center gap-3">
  

        </div> */}
      <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col lg:auto-cols-max items-end justify-center gap-[11px] rounded-xl bg-[#3964ae] px-4 py-6 shadow-[0px_6px_24px_#00020547] sm:px-6 lg:px-10 lg:py-8">          
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
          <div className="lg:w-[5px]">
          <img
          src={"/ArrowLeftRight.png"}
          alt="Arrow"
          className="w-5 h-10"
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
  
      </div>

)
}