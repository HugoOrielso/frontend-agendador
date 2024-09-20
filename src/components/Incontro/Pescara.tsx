import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoPrenotare from "../AsideInfoPrenotare"
import AsideInfoSalon from "./AsideInfoSalon"

const Pescara = () => {
  return (
    <>
        <Aside/>
        <div className="mt-[90px] w-full">
          <AsideInfoSalon/>
          <AsideInfoPrenotare/>
          <AllDates/>
        </div>
    </>
  )
}

export default Pescara