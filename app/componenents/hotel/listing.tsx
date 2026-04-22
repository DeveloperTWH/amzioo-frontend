import Image from "next/image"

export const HotelListing = () => {
  return (
    <div className="min-h-screen flex flex-col w-full px-4 md:px-6">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        <p className="text-sm md:text-base font-medium text-[#5f5f5f]">
          (Showing 1 – 40 products of 72 products)
        </p>

        {/* HIDDEN ON MOBILE */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded bg-neutral-100 border border-[#d9d9d9]">
          <p className="text-sm font-medium text-[#5f5f5f]">
            Sort by:
          </p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-black">
              Price High to Low
            </p>

            <svg width={18} height={18} viewBox="0 0 18 18" className="w-4 h-4">
              <path d="M1.80635 5.09864L8.77942 11.2958L14.9755 5.09864" fill="#A2A2A2" />
            </svg>
          </div>
        </div>

      </div>

      {/* Listing */}
      <div className="flex flex-col mt-6 gap-4">
        <HoteListingCard />
        <HoteListingCard />
        <PageNumber />
      </div>

    </div>
  )
}

const HoteListingCard = () => {
return (
  <div className="flex flex-col md:flex-row w-full rounded-lg border border-[#e8e8e6] overflow-hidden">

    {/* LEFT IMAGE */}
    <div className="relative w-full md:w-[385px] h-[260px] md:h-auto flex-shrink-0">
      <img
        src="/hotellisting.png"
        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
      />

      {/* Heart Icon */}
      <div className="absolute top-4 right-4 p-3 rounded-3xl bg-white">
        {/* keep your svg */}
      </div>

      {/* Villas Tag */}
      <div className="absolute top-4 left-4 px-4 py-1 rounded bg-[#f97101]">
        <p className="text-[12px] md:text-[13px] font-semibold text-white">
          Villas
        </p>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex flex-col w-full md:w-[810px] gap-4 md:gap-5 px-4 md:px-10 py-4 md:py-8">

      {/* TITLE + LOCATION */}
      <div>
        <p className="text-lg md:text-[26px] font-bold text-black">
          Hotel Sky Height
        </p>

        <div className="flex items-center gap-1 mt-1">
          {/* keep your location svg */}
          <p className="text-xs md:text-sm font-semibold text-[#3964ae]">
            Ontario, Canada
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-[#5f5f5f] leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor enim minim veniam
        quis notru exercit ation Lorem ipsum dolor sit amet.Veniam quis notru exercit.
      </p>

      {/* RATING */}
      <div className="flex items-center gap-2">
        {/* keep your star svg */}
        <p className="text-sm">
          <span className="font-bold text-[#f97101]">4.1</span>
          <span className="text-[#a2a2a2]"> (61 Reviews)</span>
        </p>
      </div>

      <hr />

      {/* PRICE + BUTTON */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div>
          <p className="text-sm text-[#5f5f5f]">Starting From</p>
          <p>
            <span className="text-2xl md:text-[28px] font-bold text-[#3964ae]">
              $120
            </span>
            <span className="text-sm text-[#5f5f5f]"> / Night</span>
          </p>
        </div>

        <div className="w-full sm:w-auto text-center px-6 py-3 rounded-[42px] border border-[#f97101]">
          <p className="text-sm md:text-base font-semibold text-[#f97101]">
            Check Availability →
          </p>
        </div>

      </div>
    </div>
  </div>
);
}

const PageNumber = () => {
    return(
        
        <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[22px] py-4 rounded bg-[#3964ae] border border-[#3964ae]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-white">
      1
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      2
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      3
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      4
    </p>
  </div>
</div>
)
}