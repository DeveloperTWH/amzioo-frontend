import { HeaderBar } from "@/app/componenents/header/header"
import { FlightSearchPanel} from "@/app/componenents/flight/searchPanel"
import { TopDestination } from "@/app/componenents/flight/topDestination"
import { SpecialOffer } from "@/app/componenents/home/specialoffer"
import { CarSearchPanel } from "@/app/componenents/car/searchPanel"
import Image from "next/image"
import BookFlightSection from "@/app/componenents/flight/bookFlightSection"
import { Footer } from "@/app/componenents/footer/footer"
import RentCarSection from "@/app/componenents/car/rentCarSection"
import PerfectRideSection from "@/app/componenents/car/perfectRideSection"
import { Travel } from "@/app/componenents/home/travel"
import { Testimonials } from "@/app/componenents/home/testimonial"
import FAQSection from "@/app/componenents/home/faqSection"
import NewsletterSection from "@/app/componenents/home/newsletter"


export default function CarLandingPage() {



    return(
           <div>
              <div
                className="min-h-[906px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/car rental.png')" }}
              >
              <HeaderBar/>
              <div className="flex flex-col justify-center items-center h-[50%]">
                <p className="font-bold text-white font-[Vollkorn] text-[60px]">Car Rentals for Every Journey</p>
                <div className="font-medium text-white font-[Monserrat] text-center  whitespace-pre-line">{`Search, compare, and book flights at the best prices. Enjoy seamless booking,\nflexible options, and instant confirmations.`}</div>
        
              </div>
              <div style={{position : "absolute", top : "750px"}} className=" w-full">
                <CarSearchPanel/>
              </div>

              </div>
        
              <div className="mt-20">
                <TopDestination/>
              </div>
        
              <div className="mt-20">
                <SpecialOffer/>
              </div>
        
              <RentCarSection/>
              <PerfectRideSection/>
               <Image
                src={"/perfectTripBanner.png"}
                alt="perfect trip"
                width={1920}
                height={508}
                />
              <Travel
              img="/travelCar.png"
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
              src="/BrandsImgCar.png"
              alt="Brands"
              // width={0}
              // height={0}
              className="w-[80%] h-auto object-contain"
            />
            </div>

            <FAQSection/>

            <NewsletterSection/>

            <Footer/>

            </div>
    )
}