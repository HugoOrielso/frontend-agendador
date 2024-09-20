import { Calendar, dayjsLocalizer, SlotInfo } from 'react-big-calendar'
import dayjs from 'dayjs'
import {  useEffect, useState } from 'react'
import moment from 'moment';
import 'dayjs/locale/it'
import { UseCalendarStore } from '@/store/calendarStore';
import ConfirmarEvento from './Incontro/ConfirmarEvento';

const AllDates = () => {
    dayjs.locale("it")
    const localizer = dayjsLocalizer(dayjs)
    const fetchEnabledDays = UseCalendarStore(state =>  state.getEnabledDays)
    const enabledDatesStore = UseCalendarStore(state =>  state.enabledDates)
    const selectDayByUser = UseCalendarStore(state =>  state.selectDayByUser)
    const AllDates = UseCalendarStore(state => state.allDates)
    const changeDaySelectedByUser = UseCalendarStore(state => state.changeDaySelectedByUser)
    const [selectedEvent, setSelectedEvent] = useState<unknown>(null);
    
    useEffect(()=>{
      fetchEnabledDays()
    },[fetchEnabledDays])
    
    const handleSelectSlot = (e: SlotInfo) => {
      const formattedDate = dayjs(e.start).format('YYYY-MM-DD');
      
      if (enabledDatesStore?.includes(formattedDate)) {
        selectDayByUser(formattedDate);
        changeDaySelectedByUser()
        setSelectedEvent(e);
      } 
    };

  const dayPropGetter = (date: Date) => {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const singleDay = AllDates.find(item=> item.date === formattedDate)
      let isThereAllDaysSelected
      if(singleDay){
        isThereAllDaysSelected = singleDay.disponibilidad.every(item => item.user !== null)
      }
      

      if (!enabledDatesStore?.includes(formattedDate)  ) {
        return {
          className: 'rbc-disabled-day'
        };
      }

      if(isThereAllDaysSelected){
        return{
          className: 'rbc-disabled-day'
        }
      }
      return {className: 'rbc-aviable-day'};
  };

    
  return (
    <div className='flex flex-col md:flex-row gap-2 border-t w-full place-content-center p-1  z-1'>
        <section className='flex flex-col items-center justify-center w-full border rounded-lg my-2 h-[500px]' >
          <Calendar 
          localizer={localizer}  
          style={{ width: "99%", height: "97%"}} 
          selectable
          onSelectSlot={handleSelectSlot}
          dayPropGetter={dayPropGetter}
          views={["month"]}
          />
        </section>
        <section className='flex items-center justify-center w-full my-2 border rounded-lg '>
          {selectedEvent ? 
          <>
            <ConfirmarEvento />
          </>: <h2 className='font-semibold text-2xl my-6'>Nessun giorno selezionato.</h2> }
        </section>
    </div>
  )
}

export default AllDates