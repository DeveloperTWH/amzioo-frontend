import { SearchPanel } from "@/app/componenents/panel/searchpanel"
import { HeaderBar } from "../../componenents/header/header"
import { HotelFilter } from "../../componenents/hotel/filter"
import { Footer } from "@/app/componenents/footer/footer"
import { HotelListing } from "@/app/componenents/hotel/listing"


export default function HotelListingPage() {
  return (
    <div>
        <div className="lg:h-[400px]  bg-[url('/exploreWorldBG.png')] bg-cover bg-center ">
          <HeaderBar/>
          <p className="font-bold text-white font-[Vollkorn] text-[60px] text-center mt-20">Explore Hotels</p>
          <SearchPanel/>
        </div>
        
        <div className="flex flex-row mt-40 ms-25 gap-5">
        <HotelFilter/>
        <HotelListing/>
        </div>
        <Footer/>
    </div>
  )
}