import { customAxiosAdmin } from "@/axios/axios.interceptor"
import { UseAdminStore } from "@/store/adminStore"
import { Disponibilidad } from "@/types"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const GenerateNewDate = () => {
    const daySelectByAdmin = UseAdminStore(state=> state.daySelectByAdmin)
    const [isExecuting, setIsExecuting] = useState<boolean>(false)
    const [daysSelected, setDaysSelected] = useState<Disponibilidad[]> ([])
    const [locationSalone, setLocationSalone] = useState<string>('')
    
    function deSelect(hourSelected: Disponibilidad){
        if(daysSelected.length <= 0){
            return
        }
        const isSelected = daysSelected.some(item => item.hour === hourSelected.hour);

        if (isSelected) {
            const updatedDaysSelected = daysSelected.filter(item => item.hour !== hourSelected.hour);
            setDaysSelected(updatedDaysSelected);
        }
    }

    function selectDate(hourSelected: Disponibilidad){
        const isSelected = daysSelected.some(item => item.hour === hourSelected.hour)
        if(isSelected){
            return
        }
        if (hourSelected) {
            setDaysSelected([...daysSelected, hourSelected]);
        }
    }
    
    async function generateNewDay ():Promise<void>{
        setIsExecuting(true)
        try {
            const request = await customAxiosAdmin.post("administracion/day", {hours: daysSelected, fecha: daySelectByAdmin, location: locationSalone},{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            if(request.status === 201){
                toast.success('Nuovo giorno abilitato')
                setTimeout(()=>{
                    location.reload()
                },2000)
            }
            
        } catch (error: unknown) {
            if(axios.isAxiosError(error)){
                if (error.status === 409){
                    toast.error("Questo giorno è già abilitato.")
                    return
                }
                if(error.status === 400){
                    toast.error("Dati mancanti da inviare.")
                    return
                }
            }
            toast.error("Si è verificato un errore, riprovare più tardi")
        }
        setTimeout(()=>{
            setIsExecuting(false)
        },2000)
    }

    const getLocation = (event: React.ChangeEvent<HTMLSelectElement>):void =>{
        setLocationSalone(event.target.value)
    }

    const dates = [
        {hour: "09:00", user: null},
        {hour: "11:00", user: null},
        {hour: "13:00", user: null},
        {hour: "15:00", user: null},
        {hour: "17:00", user: null},
    ]

    useEffect(()=>{
        setLocationSalone("")
        setDaysSelected([])
    },[daySelectByAdmin])
    
    return (
        <section className="flex flex-col rounded items-center justify-between w-full max-w-[800px] border sm:flex-row">
            <AnimatePresence mode="wait">

            <motion.div
            key={daySelectByAdmin}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
             className="flex items-center justify-center flex-col w-full">
                <section className="flex flex-col w-full p-3 gap-2">
                    <section className="flex flex-col  w-full items-center py-3 justify-start gap-3 border px-2 rounded">
                        <div className="border-b sm:border-0  sm:border-r pr-2 w-full">
                            <h2 className="font-semibold">programma</h2>
                            <div className="flex flex-col w-full flex-wrap  py-3 gap-1 ">
                                {
                                    dates.map(item=>{
                                        const isSelected = daysSelected.some(i => i.hour === item.hour)
                                        return(
                                            <button key={crypto.randomUUID()} onPointerDown={()=>selectDate(item)} className={`p-2 border rounded transition-all duration-300 hover:bg-blue-200 ${isSelected ? 'border-blue-300': null}`}>
                                                {item.hour}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="gap-3  flex w-full flex-wrap py-3 ">
                                {daysSelected.length > 0 ? 
                                    <div className="w-full">
                                        <h2>Orari selezionati</h2>
                                        <div className="gap-2 flex w-full items-start justify-start">
                                            {daysSelected.map(item=>{
                                                return(
                                                    <button key={crypto.randomUUID()} className={`p-2 border rounded border-green-500 `} onPointerDown={()=>deSelect(item)}>
                                                        {item.hour} ✅
                                                    </button>
                                                )
                                            })}  
                                        </div>
                                    </div>
                                    :
                                    <p>Nessun orario prescelto</p>
                                }
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col sm:flex-row gap-8 items-center justify-between  w-full">
                        <div className="border rounded w-full h-full p-1">

                            <label htmlFor="locationSalone" className="flex w-full flex-col">
                                <select value={locationSalone} name="locationSalone" id="locationSalone" onChange={getLocation}className="sm:max-w-[300px] border p-2 rounded border-blue-200 active:border-blue-300 focus:border-blue-300">
                                    <option value="" disabled >Seleziona salone</option>
                                    <option value="sambenedetto">Sam Benedetto</option>
                                    <option value="pescara">Pescara</option>
                                </select>
                            </label>
                        </div>
                        <span className="w-full border rounded flex font-semibold flex-col items-start  justify-center">
                        Data:
                        <h2 className="custom-text-shadow-blue">
                            {daySelectByAdmin}
                        </h2>
                        </span>
                        <div className=" w-full items-center  justify-center flex py-1">
                            
                            {isExecuting ? 
                            <button className="p-2 border rounded transition-all duration-500 bg-[#00D26A] hover:bg-[#6dff2f] text-white cursor-pointer"  disabled>
                                Abilitare
                            </button>
                            :
                            <button className="p-2 border rounded transition-all duration-500 bg-[#00D26A] hover:bg-[#6dff2f] text-white cursor-pointer" onPointerDown={generateNewDay} >
                                Abilitare
                            </button>}
                        </div>

                    </div>
                </section>
            </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default GenerateNewDate