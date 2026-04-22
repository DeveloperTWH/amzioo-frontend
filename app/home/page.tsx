
import banner from "../../public/banner.png"
import Image from "next/image";
import { SearchPanel } from "../componenents/panel/searchpanel";
import {HeaderBar} from "../componenents/header/header"
import { Footer } from "../componenents/footer/footer";
import { Explore } from "../componenents/home/explore";
import { SpecialOffer } from "../componenents/home/specialoffer";
import { DestinationsGrid } from "../componenents/home/destinationsGrid";
import { BrowseHotels } from "../componenents/home/browseHotels";
import { WeBelive } from "../componenents/home/weBelive";
import { Travel } from "../componenents/home/travel";
import { Testimonials } from "../componenents/home/testimonial";
import ExploreWorld from "../componenents/home/exploreWorld";
import FAQSection from "../componenents/home/faqSection";
import NewsletterSection from "../componenents/home/newsletter";
export default function Home() {
  return (
    <div>
      <div className="lg:h-[906px]  bg-[url('/banner.png')] bg-cover bg-center ">
      <HeaderBar/>
      <div className="flex flex-col justify-center items-center h-[50%]">
        <p className="font-bold text-white font-[Vollkorn] text-[60px]">Find Your Perfect Trip, All in One Place</p>
        <div className="font-medium text-white font-[Monserrat] text-center  whitespace-pre-line">{`Search and compare flights, hotels, and rental cars to plan your next journey with ease.\nGet the best deals, instant confirmations, and flexible booking options.`}</div>

      </div>
      <div className="mt-40">
        <SearchPanel/>
      </div>
      </div>
      <div className="h-[200px]"></div>
      <Explore/>
      <SpecialOffer/>
      <DestinationsGrid/>
      <Image
      src={"/travelerBook.png"}
      alt="why chose travel"
      width={1920}
      height={508}
      />
      <BrowseHotels/>
      <Image
      src={"/PathToRoad.png"}
      alt="path to road"
      width={1920}
      height={508}
      />
      <WeBelive/>
      <Travel
      img="/boar.png"
      />
      <Testimonials/>
      <ExploreWorld/>
      <FAQSection/>
      <NewsletterSection/>
      <Footer/>

    </div>
  );
}