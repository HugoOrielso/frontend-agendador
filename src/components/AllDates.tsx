import { Calendar, dayjsLocalizer, SlotInfo } from 'react-big-calendar'
import dayjs from 'dayjs'
import {  useEffect, useState } from 'react'
import moment from 'moment';
import 'dayjs/locale/it'
import FormCreateEvent from './Incontro/FormCreateEvent'
import { UseCalendarStore } from '@/store/calendarStore';


const AllDates = () => {
    dayjs.locale("it")
    const localizer = dayjsLocalizer(dayjs)
    const fetchEnabledDays = UseCalendarStore(state =>  state.getEnabledDays)
    const enabledDatesStore = UseCalendarStore(state =>  state.enabledDates)
    console.log(enabledDatesStore);
    
    const selectDayByUser = UseCalendarStore(state =>  state.selectDayByUser)
    const [selectedEvent, setSelectedEvent] = useState<unknown>(null);
    
    useEffect(()=>{
      fetchEnabledDays()
    },[fetchEnabledDays])
    
    const handleSelectSlot = (e: SlotInfo) => {
      const formattedDate = dayjs(e.start).format('YYYY-MM-DD');
      const pr = enabledDatesStore?.includes(formattedDate)
      console.log(pr);
      
      if (enabledDatesStore?.includes(formattedDate)) {
        selectDayByUser(formattedDate);
        setSelectedEvent(e);
      } 
    };

    const dayPropGetter = (date: Date) => {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      if (!enabledDatesStore?.includes(formattedDate)  ) {
        return {
          className: 'rbc-disabled-day'
        };
      }
      return {className: 'rbc-aviable-day'};
    };


    
    return (
    <div className='grid md:grid-cols-[60%,40%]  border-t w-full place-content-center  '>
        <section className='flex flex-col items-center justify-center w-full  h-[500px]' >
            <Calendar 
            localizer={localizer}  
            style={{ width: "100%", padding: "1em"}} 
            selectable
            onSelectSlot={handleSelectSlot}
            dayPropGetter={dayPropGetter}
            />
        </section>
        <section>
            {selectedEvent ? 
            <>
                <FormCreateEvent />
            </>: null}
        </section>
    </div>
  )
}

export default AllDates