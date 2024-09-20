import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoSalon from "./AsideInfoSalon"

const SamBe = () => {
  return (
    <>
      <Aside/>
      <div className="mt-[90px] w-full">
        <AsideInfoSalon/>
        <AllDates/>
      </div>
    </>
  )
}

export default SamBe