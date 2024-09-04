import AllDates from "../AllDates"
import Aside from "../Aside"
import AsideInfoSalon from "./AsideInfoSalon"

const SamBe = () => {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-[250px,1fr]  w-full">
        <Aside/>
        <section className="overflow-hidden">
          <AsideInfoSalon/>
          <AllDates/>
        </section>
      </div>
    </>
  )
}

export default SamBe