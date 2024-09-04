import Aside from "./Aside"
import MyDates from "./MyDates"

const Appuntamenti = () => {
  return (
    <>
        <div className="flex flex-col sm:grid sm:grid-cols-[250px,1fr] md:grid-cols-[280px,1fr] w-full">
            <Aside/>
            <MyDates/>
        </div>
    </>
  )
}

export default Appuntamenti