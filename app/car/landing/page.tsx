import { HeaderBar } from "@/app/componenents/header/header"
import { FlightSearchPanel} from "@/app/componenents/flight/searchPanel"
import { TopDestination } from "@/app/componenents/flight/topDestination"
import { SpecialOffer } from "@/app/componenents/home/specialoffer"

import BookFlightSection from "@/app/componenents/flight/bookFlightSection"
import { Footer } from "@/app/componenents/footer/footer"
import RentCarSection from "@/app/componenents/car/rentCarSection"


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
                <FlightSearchPanel/>
              </div>

              </div>
        
              <div className="mt-20">
                <TopDestination/>
              </div>
        
              <div className="mt-20">
                <SpecialOffer/>
              </div>
        
              <RentCarSection/>
               

               <Footer/>

            </div>
    )
}