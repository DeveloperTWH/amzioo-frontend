import Image from "next/image"

export const SpecialOffer = ()=>{


    return(

   <div className="w-full mt-20 px-4 lg:w-[1608px] mx-auto">

  {/* Header */}
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
    <div>
      <h2 className="text-[32px] lg:text-[42px] font-bold capitalize text-black">
        Special Offers
      </h2>
      <p className="text-base text-[#5f5f5f] capitalize">
        Exclusive deals and special offers for your next trip.
      </p>
    </div>

    <div className="mt-4 lg:mt-0 px-[42px] py-[18px] rounded-[42px] bg-[#f97101]">
      <p className="text-base font-semibold text-white capitalize">
        Explore All Deals →
      </p>
    </div>
  </div>

  {/* Cards Container */}
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

    {/* CARD 1 */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-lg bg-white shadow-md w-full">
      
      {/* Image */}
      <div className="w-full sm:w-[277px] h-[200px] sm:h-[220px] relative">
        <img
          src="/OfferImage1.png"
          alt="offer"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-[419px]">
        <div className="inline-block px-4 py-2 rounded-tr-3xl rounded-bl-3xl bg-[#3964ae]/[0.14]">
          <p className="text-base font-bold text-[#3964ae]">
            Last-Minute Deals
          </p>
        </div>

        <h3 className="text-[28px] sm:text-[32px] font-bold mt-3 capitalize">
          Up to 25% off
        </h3>

        <p className="text-base text-[#5f5f5f] mt-2 capitalize">
          Planning a quick trip? Book last-minute stays and enjoy great savings on selected hotels.
        </p>

        <p className="text-[#f97101] font-semibold mt-3">
          Book Now →
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-lg bg-[#ffc300]/[0.24] w-full">
      
      <div className="w-full sm:w-[277px] h-[200px] sm:h-[220px]">
        <img
          src="/OfferImage2.png"
          alt="offer"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full sm:w-[419px]">
        <div className="inline-block px-4 py-2 rounded-tr-3xl rounded-bl-3xl bg-[#f97101]/[0.17]">
          <p className="text-base font-bold text-[#f97101]">
            Weekend Escape Offers
          </p>
        </div>

        <h3 className="text-[28px] sm:text-[32px] font-bold mt-3 capitalize">
          Save up to 20%
        </h3>

        <p className="text-base text-[#5f5f5f] mt-2 capitalize">
          Make the most of your weekends with exclusive hotel deals perfect for short getaways.
        </p>

        <p className="text-[#f97101] font-semibold mt-3">
          Book Now →
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-lg bg-white shadow-md w-full">
      
      <div className="w-full sm:w-[277px] h-[200px] sm:h-[220px]">
        <img
          src="/pexels-vlada-karpovich-9969240-1.jpeg"
          alt="offer"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full sm:w-[419px]">
        <div className="inline-block px-4 py-2 rounded-tr-3xl rounded-bl-3xl bg-[#3964ae]/[0.14]">
          <p className="text-base font-bold text-[#3964ae]">
            Last-Minute Deals
          </p>
        </div>

        <h3 className="text-[28px] sm:text-[32px] font-bold mt-3 capitalize">
          Up to 25% off
        </h3>

        <p className="text-base text-[#5f5f5f] mt-2 capitalize">
          Planning a quick trip? Book last-minute stays and enjoy great savings on selected hotels.
        </p>

        <p className="text-[#f97101] font-semibold mt-3">
          Book Now →
        </p>
      </div>
    </div> */}

    {/* CARD 4 */}
    {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-lg bg-white shadow-md w-full">
      
      <div className="w-full sm:w-[277px] h-[200px] sm:h-[220px]">
        <img
          src="/pexels-vlada-karpovich-9969240-1.jpeg"
          alt="offer"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full sm:w-[419px]">
        <div className="inline-block px-4 py-2 rounded-tr-3xl rounded-bl-3xl bg-[#3964ae]/[0.14]">
          <p className="text-base font-bold text-[#3964ae]">
            Last-Minute Deals
          </p>
        </div>

        <h3 className="text-[28px] sm:text-[32px] font-bold mt-3 capitalize">
          Up to 25% off
        </h3>

        <p className="text-base text-[#5f5f5f] mt-2 capitalize">
          Planning a quick trip? Book last-minute stays and enjoy great savings on selected hotels.
        </p>

        <p className="text-[#f97101] font-semibold mt-3">
          Book Now →
        </p>
      </div>
    </div> */}

  </div>
</div>

    )

}