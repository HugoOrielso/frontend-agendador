import { UseCalendarStore } from '@/store/calendarStore';
import { useEffect, useState } from 'react';
import { Location } from '../Icons';
import { DayConfirm, Disponibilidad } from '@/types';
import { toast, Toaster } from 'sonner';
import { createPortal } from 'react-dom'
import Swal from 'sweetalert2'
import dayjs from 'dayjs';
import withReactContent from 'sweetalert2-react-content'
import 'dayjs/locale/it'; 


const ConfirmarEvento = () => {
    dayjs.locale('it');
    const daySelectedByUser = UseCalendarStore(state=> state.dayselectedByUser)
    const confirmarEvento = UseCalendarStore(state => state.setDayConfirm)
    const [selectHour , setSelectHour] = useState <Disponibilidad[]> ([])
    const urlLocation = location.href.split("/")[3]
    const ubicacion = urlLocation === 'incontrosbt'? 'Sam Benedetto':  "Pescara"    
    const [swalShown, setSwalShown] = useState(false)
    const showSwal = () => {
        Swal.fire({
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmare",
            cancelButtonText: "Cancelare",
            didOpen: () => {
                setSwalShown(true);
            },
            didClose: () => {
                setSwalShown(false);
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let eventoConfirmado: DayConfirm | undefined
                if (daySelectedByUser?.date && selectHour[0]?.hour) {
                    eventoConfirmado = {
                      date: daySelectedByUser.date,
                      location: ubicacion, 
                      hour: selectHour[0].hour,
                    };
                    confirmarEvento(eventoConfirmado);
                } 
                withReactContent(Swal).fire({
                    icon: "success",
                    html: <h3 className='font-bold'>Ti reindirizzeremo per finalizzare l'appuntamento</h3>,
                    showConfirmButton: false
                });
                setTimeout(()=>{
                    location.href = "confirmare-apputamenti"
                },3000)
            }
            if(!result.isConfirmed){
                toast.warning("")
            }
        });
    }
    
    const formatDate = (dateString:string) => {
        return dayjs(dateString).format('dddd, D MMMM');
    };

    async function newEvent() {
        if(selectHour.length === 0){
            toast.info("Per continuare seleziona un orario disponibile.")
            return
        }
        showSwal()
    }

    const userSelectHour = (item: Disponibilidad) =>{
        setSelectHour([item])
    }

    useEffect(()=>{
        setSelectHour([])
    },[daySelectedByUser])
    return (
    <section className='flex flex-col md:flex-col w-full items-start justify-end h-full border rounded-lg'>
        <div className='flex w-full flex-col justify-center items-center'>
            <h1 className='flex gap-2 text-3xl font-semibold'> 
                <span>Giorno selezionato: </span>
            </h1>
            <h2>
                <span className='font-bold text-2xl custom-text-shadow-blue'> {daySelectedByUser?.date} </span> ✅ 
            </h2>
        </div>
        <div className='flex w-full gap-4 mt-4 p-4 items-center justify-center flex-wrap border-b'>
            {
                daySelectedByUser?.disponibilidad.map((item)=>{
                    if(!item.user){
                        return(
                            <button key={crypto.randomUUID()} className={`p-4 border rounded border-blue-300 transition-all duration-300 hover:border-blue-800  bg-gradient-to-br from-white to-indigo-100`} onPointerDown={()=> userSelectHour(item)}> 
                                {item.hour}
                            </button>
                        )
                    }
                })
            }
        </div>  
        <div className='flex flex-col w-full gap-4 p-4 items-center justify-center flex-wrap border-b'>
            <h2 className='font-semibold'>Orario selezionato</h2>
            {
                selectHour.length > 0 ?
                <>
                    {
                        selectHour?.map((item)=>{
                            return(
                                <button key={crypto.randomUUID()} className='p-4 border rounded border-green-300 transition-all duration-300 hover:border-green-800' onPointerDown={()=> userSelectHour(item)}> 
                                    {item.hour} ✅
                                </button>
                            )
                        })
                    }
                </>
                :
                <div >
                    <h2 className='text-red-500 custom-text-shadow-red text-lg my-4'>Nessun orario selezionato</h2>
                </div>
            }
        </div>  
        <div className='flex  w-full items-center justify-center my-4'>
            <div className='flex flex-col gap-4 items-center justify-between w-full'>
                <div className='border-b w-full items-center justify-center flex py-4'>
                    {daySelectedByUser?.location === 'sambenedetto' ? 
                        <h2 className='flex items-center font-medium text-lg gap-1'>
                            <span className='text-zinc-700'>Salone: </span>
                            <span className='custom-text-shadow-blue'>Sam Benedetto, Via Montebello 44</span> 
                            <span className='text-red-500 '><Location/></span> 
                        </h2>
                        : 
                        <h2 className='flex items-center font-medium text-lg gap-1'>
                            <span className='text-zinc-700'>Salone: </span>
                            <span className='custom-text-shadow-blue'>Pescara, Via Napoli 39</span> 
                            <span className='text-red-500'><Location/></span> 
                        </h2>        
                    }
                </div>
                <div className='w-full items-center justify-center flex h-full'>
                    <button className='p-4 border rounded transition-all duration-500 bg-[#00D26A] hover:bg-[#6dff2f] text-white' onClick={newEvent}>Confirmare</button>
                </div>
                {swalShown &&
                createPortal(
                    <div>
                        <h2 className='font-bold text-blue-950 text-2xl'>Confermare i dati</h2>
                        <div>
                            <p> Salone: <span className='font-bold'>{daySelectedByUser?.location === 'sambenedetto' ? 'Sam Benedetto': 'Pescara'}</span>  </p>
                            {
                                daySelectedByUser &&
                                <p>Data: <span className='font-bold'>{formatDate(daySelectedByUser?.date)}</span>  alle <span className='font-bold'>{ selectHour[0].hour} </span>  </p>
                            }
                        </div>
                    </div>,
                  Swal.getHtmlContainer()!
                )}
            </div>
        </div>
        <Toaster richColors/>
    </section>
  )
}

export default ConfirmarEvento