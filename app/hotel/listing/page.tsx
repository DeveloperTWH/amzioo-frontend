import { SearchPanel } from "@/app/componenents/panel/searchpanel"
import { HeaderBar } from "../../componenents/header/header"
import { HotelFilter } from "../../componenents/hotel/filter"
import { Footer } from "@/app/componenents/footer/footer"
import { HotelListing } from "@/app/componenents/hotel/listing"
import Image from "next/image"
import { SpecialOffer } from "@/app/componenents/home/specialoffer"
import NewsletterSection from "@/app/componenents/home/newsletter"


export default function HotelListingPage() {
  return (
    <div>
        <div className="lg:h-[400px]  bg-[url('/exploreWorldBG.png')] bg-cover bg-center ">
          <HeaderBar/>
          <p className="font-bold text-white font-[Vollkorn] text-[30px] text-center">Explore Hotels</p>
          <div className="mt-20">
          <SearchPanel/>
          </div>
        </div>
                
        <div className="flex flex-row mt-40 lg:ms-25 gap-5">
          
          {/* Hidden on mobile, visible on md and above */}
          <div className="hidden md:block">
            <HotelFilter />
          </div>

          <HotelListing />

        </div>
        <div className="flex justify-center mt-10">
          <img
          src="/BrandsImg.png"
          alt="Brands"
          // width={0}
          // height={0}
          className="w-[80%] h-auto object-contain"
        />
        </div>
        <SpecialOffer/>
        <NewsletterSection/>
        <Footer/>
</div>
  )
}