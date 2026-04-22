
export const SearchPanel = () => {

    return(

  <div className="flex justify-center items-center flex-col gap-5 px-10 py-8 rounded-xl bg-[#3964ae] shadow-[0px_6px_24px_rgba(0,2,6,0.28)]">
    
    {/* Top Row */}
    <div className="flex  justify-center w-full gap-4">

      {/* Departure */}
      <div className="w-[800px]">
        <p className="text-sm font-semibold text-white mb-1">Departure From</p>
        <div className="h-12 rounded bg-white border flex items-center px-3">
          <span className="text-[13px] font-semibold text-[#5f5f5f]">City</span>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center px-1 py-3.5">
        <svg width={18} height={20} fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.00111721 14.3758C0.00111721 14.5415 0.0669652 14.7005 0.184175 14.8177C0.301386 14.9349 0.460357 15.0008 0.626117 15.0008H15.3674L11.4336 18.9333C11.3163 19.0506 11.2503 19.2098 11.2503 19.3758C11.2503 19.5418 11.3163 19.7009 11.4336 19.8183C11.551 19.9356 11.7101 20.0016 11.8761 20.0016C12.0421 20.0016 12.2013 19.9356 12.3186 19.8183L17.3186 14.8183C17.3768 14.7602 17.423 14.6913 17.4545 14.6153C17.486 14.5394 17.5022 14.458 17.5022 14.3758C17.5022 14.2936 17.486 14.2122 17.4545 14.1362C17.423 14.0603 17.3768 13.9913 17.3186 13.9333L12.3186 8.93329C12.2013 8.81593 12.0421 8.75 11.8761 8.75C11.7101 8.75 11.551 8.81593 11.4336 8.93329C11.3163 9.05065 11.2503 9.20982 11.2503 9.37579C11.2503 9.54176 11.3163 9.70093 11.4336 9.81829L15.3674 13.7508H0.626117C0.460357 13.7508 0.301386 13.8166 0.184175 13.9338C0.0669652 14.0511 0.00111721 14.21 0.00111721 14.3758Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Arrival */}
      <div className="w-[290px]">
        <p className="text-sm font-semibold text-white mb-1">Arriving To</p>
        <div className="h-12 rounded bg-white border flex items-center px-3">
          <span className="text-[13px] font-semibold text-[#5f5f5f]">City</span>
        </div>
      </div>

      {/* Dates */}
      <div className="w-[280px]">
        <p className="text-sm font-semibold text-white mb-1">Travel Dates</p>
        <div className="h-12 rounded bg-white border flex items-center px-3">
          <span className="text-[13px] font-semibold text-[#5f5f5f]">
            DD/MM/YYYY - DD/MM/YYYY
          </span>
        </div>
      </div>

      {/* Travelers */}
      <div className="w-[210px]">
        <p className="text-sm font-semibold text-white mb-1">Travelers</p>
        <div className="h-12 rounded bg-white border flex items-center justify-between px-3">
          <span className="text-[13px] font-semibold text-[#5f5f5f]">
            2 adults · 0 children
          </span>
        </div>
      </div>

      {/* Class */}
      <div className="w-[210px]">
        <p className="text-sm font-semibold text-white mb-1">Filter by Class</p>
        <div className="h-12 rounded bg-white border flex items-center justify-between px-3">
          <span className="text-[13px] font-semibold text-[#5f5f5f]">
            Economy
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="px-12 py-3.5 rounded bg-[#f97101] text-white font-semibold">
        Search
      </button>
    </div>

    {/* Bottom Options */}
    <div className="flex flex-wrap gap-10 text-white font-semibold">
      <span>Round Trip</span>
      <span className="opacity-70">One-way</span>
      <span className="opacity-70">Multi City</span>
      <span className="opacity-70">Direct Flights Only</span>
    </div>
  </div>
)
    


}