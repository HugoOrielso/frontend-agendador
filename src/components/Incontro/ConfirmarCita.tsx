import Aside from "../Aside"
import { Toaster } from "sonner"
import ValidarExistenciaDelUsuario from "./ValidarExistenciaDelUsuario"
import EncuestaUser from "./EncuestaUser"
import { UseCalendarStore } from "@/store/calendarStore"
import { useEffect } from "react"
import PagarCita from "./PagarCita"
import DatosCita from "./DatosCita"

const ConfirmarCita = () => {
    const resetDataUser = UseCalendarStore(state => state.deleteDataUser)
    useEffect(()=>{
        resetDataUser()
    },[resetDataUser])
    
    return (
    <div className="min-h-screen flex flex-col items-center justify-start border w-full p-2">
        <Aside/>
        <div className="flex items-center w-full h-full grow max-w-[1000px] justify-center flex-col gap-2">
            <section className="flex flex-col w-full lg:grid mt-2 lg:grid-cols-2 lg:place-content-center lg:place-items-center  h-full overflow-hidden gap-2  ">
                <ValidarExistenciaDelUsuario />
                <EncuestaUser />
            </section>
            <DatosCita/>
            <section className=' flex flex-col h-full items-center justify-center w-full border rounded '>
                <PagarCita />
            </section>
        </div>

        <Toaster richColors/>
    </div>
    )
}

export default ConfirmarCita