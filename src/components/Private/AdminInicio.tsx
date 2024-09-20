import { UseAdminStore } from "@/store/adminStore"
import dayjs from "dayjs"
import { Calendar, dayjsLocalizer, SlotInfo } from "react-big-calendar"
import DaysDetails from "./DaysDetails"
import { Toaster } from "sonner"
import {  useEffect } from "react"
import '@/calendarAdmin.css'
import HeaderAdmin from "./HeaderAdmin"
const AdminInicio = () => {
  dayjs.locale("it")
  const localizer = dayjsLocalizer(dayjs)
  const changeDay = UseAdminStore(state =>  state.changeDaySelected)
  const dateSelectedByAdmin = UseAdminStore(state =>  state.daySelectByAdmin)
  const fetchDaysData = UseAdminStore((state) => state.fetchallDaysEnabled);
  const allDays = UseAdminStore((state) => state.allDayEnabledArray);

  useEffect(() => {
    fetchDaysData();
  }, [fetchDaysData]);

  const handleSelectSlot = (e: SlotInfo) => {
    const dateSelectByAdmin = dayjs(e.start).format("YYYY-MM-DD")
    const today = dayjs().format("YYYY-MM-DD")
    if (dateSelectByAdmin >= today) {
      changeDay(dateSelectByAdmin)
    } 
  };

  const dayPropGetter = (date: Date) => {
    const today = dayjs().startOf('day'); 
    const isBeforeToday = dayjs(date).isBefore(today); 

    const hasEvent = allDays.some(event => dayjs(event.date).isSame(date, 'day'));

    if (hasEvent) {
      return {
        className: 'rbc-has-event-day' 
      };
    }

    if (isBeforeToday) {
      return {
        className: 'rbc-disabled-day' 
      };
    }

    return {
      className: 'rbc-available-day' 
    };
  }

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <HeaderAdmin/>
      <div className="flex flex-col w-full max-h-[500px]">
        <Calendar 
          localizer={localizer}  
          style={{ width: "100%", padding: ".5em", height: "450px"}} 
          selectable
          onSelectSlot={handleSelectSlot}
          dayPropGetter={dayPropGetter}
          views={["month"]}
        />
      </div>
      <section className="w-full">
        {dateSelectedByAdmin && 
          <DaysDetails/>
        }
      </section>
      <Toaster richColors/>
    </div>
  )
}

export default AdminInicio