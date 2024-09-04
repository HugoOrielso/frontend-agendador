import Aside from "./Aside"
import Selectubication from "./Selectubication"


const StartView = () => {
  return (
    <>
        <div className="flex flex-col md:grid md:grid-cols-[250px,1fr]  w-full">
            <Aside/>
            <Selectubication/>
        </div>
    </>
  )
}

export default StartView