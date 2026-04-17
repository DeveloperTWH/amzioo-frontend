
import banner from "../../public/banner.png"
import {HeaderBar} from "../componenents/header/header"

export default function Home() {
  return (
      <div className="h-[906px] bg-[url('/banner.png')] bg-cover bg-center flex items-center justify-center">
        <HeaderBar/>
    </div>
  );
}