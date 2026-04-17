
import banner from "../../public/banner.png"
import { Box } from "../box";
import {HeaderBar} from "../componenents/header/header"

export default function Home() {
  return (
      <div className="h-[906px] bg-[url('/banner.png')] bg-cover bg-center ">
        <HeaderBar/>
        <Box/>
    </div>
  );
}