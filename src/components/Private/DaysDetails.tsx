/* eslint-disable react-hooks/exhaustive-deps */
import { customAxiosAdmin } from "@/axios/axios.interceptor"
import { UseAdminStore } from "@/store/adminStore"
import { AxiosError } from "axios"
import { useEffect,  } from "react"
import { toast  } from "sonner"
import DetailsEnabledDays from "./DetailsEnabledDays"

const DaysDetails = () => {
    const dateSelectedByAdmin = UseAdminStore(state =>  state.daySelectByAdmin)
    const changeDaySelected = UseAdminStore(state=> state.changeDaySelected)
    const stateDay = UseAdminStore(state=> state.stateOfDay)
    const changeStateOfDay = UseAdminStore(state=> state.changeState)
    
    useEffect(()=>{
        async function detailsDate(){
            try {
                const request = await customAxiosAdmin.get("administracion/day/" + dateSelectedByAdmin,{
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                if(request.data.date){
                    changeDaySelected(request.data.date)
                    changeStateOfDay(request.data.date.state)

                }else{
                    changeDaySelected(null)
                    changeStateOfDay(null)
                }
                
            } catch (error) {
                
                if (error instanceof AxiosError) {
                    if (error.response?.status === 204) {
                        toast.error('No hay eventos.');
                    } else {
                        toast.error('Error en la solicitud.');
                    }
                } else {
                    toast.error('Error desconocido.');
                }
            }
        }
        detailsDate()
    },[dateSelectedByAdmin])

    return (
        <section className="flex w-full flex-col items-center my-12 px-2" >
            <h3 className="text-base font-bold sm:text-2xl "> Detagli del giorno: {dateSelectedByAdmin} </h3> 
            <div className="flex  w-full">

            </div>
            {
                stateDay === 'enabled' &&
                <DetailsEnabledDays/>
            }

            {
                stateDay === 'disabled' &&

                <>
                    días deshabilitados
                </>
            }

            {
                stateDay === null &&
                <>
                    días sin nada
                </>
            }

        </section>
    )
}

export default DaysDetails