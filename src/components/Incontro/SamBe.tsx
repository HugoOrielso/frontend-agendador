import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoSalon from "./AsideInfoSalon"

const SamBe = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] w-full mim-h-screen gap-y-3">
      <Aside/>
      <div className="m-[0 auto] w-full   md:m-0 place-items-center place-content-center">
        <div className="w-full rounded max-w-[1000px] border ">
          <AsideInfoSalon/>
          <AllDates/>
        </div>
      </div>
    </div>
  )
}

export default SamBe