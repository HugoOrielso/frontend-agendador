import Aside from "../Aside"
import { Toaster } from "sonner"
import ValidarExistenciaDelUsuario from "./ValidarExistenciaDelUsuario"
import PagarCita from "./PagarCita"
import EncuestaUser from "./EncuestaUser"
import { UseCalendarStore } from "@/store/calendarStore"
import { useEffect } from "react"

const ConfirmarCita = () => {
    const resetDataUser = UseCalendarStore(state => state.deleteDataUser)
    
    useEffect(()=>{
        resetDataUser()
    },[resetDataUser])

    
    return (
    <div className="lg:max-h-screen min-h-screen flex flex-col items-center justify-center w-full p-2">
        <Aside/>
        <div className="mt-[90px] h-full items-center w-full justify-between flex flex-col md:flex-row ">
        <section className="flex flex-col lg:grid  lg:grid-cols-3 lg:place-content-center lg:place-items-center w-full h-full overflow-hidden border rounded ">
            <ValidarExistenciaDelUsuario />
            <div className="h-full w-full flex  overflow-hidden overflow-y-scroll hide-scrollbar">
              <EncuestaUser />
            </div>
            <PagarCita />
        </section>
        </div>
        <Toaster richColors/>
    </div>
    )
}

export default ConfirmarCita