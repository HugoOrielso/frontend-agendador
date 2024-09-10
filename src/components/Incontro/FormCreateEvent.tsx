import { UseCalendarStore } from '@/store/calendarStore';
import { DataDay } from '@/types';
import React from 'react';
const FormCreateEvent = () => {
    const daySelectedByUser = UseCalendarStore(state=> state.daySelectedByUser)
    const days = UseCalendarStore(state=> state.enabledDays)
    const shiftInDay= days.find(i => i.date === daySelectedByUser) as DataDay 

    async function newEvent(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }


    return (
    <>
        {
            shiftInDay.disponibilidad.length > 0 ?
            shiftInDay.disponibilidad.map(i=>{
                if(i.id === null){
                    return(
                        <form key={crypto.randomUUID()} onSubmit={newEvent} className='p-2'>
                            {i.hour}
                            <button className='bg-blue-400' >Seleccionar</button>
                        </form>
                    )
                }                
            })
            :
            <p>No hay eventos disponibles lo sentimos</p>
        }
    </>
  )
}

export default FormCreateEvent