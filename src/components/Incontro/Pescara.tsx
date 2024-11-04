import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoSalon from "./AsideInfoSalon"

const Pescara = () => {
  return (
    <>
        <Aside/>
        <div className="min-h-screen mx-0 my-auto w-full">
          <AsideInfoSalon/>
          <AllDates/>
        </div>
    </>
  )
}

export default Pescara