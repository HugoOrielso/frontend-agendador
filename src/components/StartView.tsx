import Aside from "./Aside"
import Selectubication from "./Selectubication"


const StartView = () => {
  return (
    <div className="max-h-screen w-full flex-col flex">
      <Aside/>
      <div className=" items-center justify-center h-full flex  w-full">
        <Selectubication/>
      </div>
    </div>
  )
}

export default StartView