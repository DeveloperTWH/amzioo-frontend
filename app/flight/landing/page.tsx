import { HeaderBar } from "@/app/componenents/header/header"
import { SearchPanel } from "@/app/componenents/panel/searchpanel"


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
      <div className="mt-40">
        <SearchPanel/>
      </div>
      </div>

    </div>
  )
}

