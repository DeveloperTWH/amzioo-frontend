import { HeaderBar } from "@/app/componenents/header/header"
import { FlightSearchPanel} from "@/app/componenents/flight/searchPanel"
import { TopDestination } from "@/app/componenents/flight/topDestination"
import { SpecialOffer } from "@/app/componenents/home/specialoffer"
import { Travel } from "@/app/componenents/home/travel"
import BookFlightSection from "@/app/componenents/flight/bookFlightSection"
import Image from "next/image"
import { Testimonials } from "@/app/componenents/home/testimonial"
import FAQSection from "@/app/componenents/home/faqSection"

export default function FlightLandingPage() {
  return (
    <div>
      <div
        className="min-h-[906px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/flightbanner.png')" }}
      >
      <HeaderBar/>
      <div className="flex flex-col justify-center items-center h-[50%]">
        <p className="font-bold text-white font-[Vollkorn] text-[60px]">Find the Best Flights for Your Next Trip</p>
        <div className="font-medium text-white font-[Monserrat] text-center  whitespace-pre-line">{`Search, compare, and book flights at the best prices. Enjoy seamless booking,\nflexible options, and instant confirmations.`}</div>

      </div>
      <div className="mt-40 w-full">
        <FlightSearchPanel/>
      </div>
      </div>

      <div className="mt-20">
        <TopDestination/>
      </div>

      <div className="mt-20">
        <SpecialOffer/>
      </div>

      <BookFlightSection/>

    <div className="mt-10">
      <Image
      src={"/tripBannerImg.png"}
      alt="why chose travel"
      width={1920}
      height={508}
      />
    </div>

    <Travel
    img="/plane.png"
    />

    <Testimonials/>
       <Image
      src={"/travelerBook.png"}
      alt="why chose travel"
      width={1920}
      height={508}
      />
        <div className="flex justify-center mt-10">
          <img
          src="/BrandsImg.png"
          alt="Brands"
          // width={0}
          // height={0}
          className="w-[80%] h-auto object-contain"
        />
        </div>

        <FAQSection/>

    </div>
  )
}

