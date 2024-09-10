import { UseAdminStore } from "@/store/adminStore"
import dayjs from "dayjs"
import { Calendar, dayjsLocalizer, SlotInfo } from "react-big-calendar"
import DaysDetails from "./DaysDetails"
import { Toaster } from "sonner"

const AdminInicio = () => {
  dayjs.locale("it")
  const localizer = dayjsLocalizer(dayjs)
  const setSelectDateByAdmin = UseAdminStore(state =>  state.setDaySelectByUser)
  const dateSelectedByAdmin = UseAdminStore(state =>  state.daySelectByAdmin)
  
  const handleSelectSlot = (e: SlotInfo) => {
    const dateSelectByAdmin = dayjs(e.start).format("YYYY-MM-DD")
    const today = dayjs().format("YYYY-MM-DD")
    if (dateSelectByAdmin >= today) {
      setSelectDateByAdmin(dateSelectByAdmin);
    } 
  };

  const dayPropGetter = (date: Date) => {
    const today = dayjs().startOf('day')
    const isBeforeToday = dayjs(date).isBefore(today)
    if (isBeforeToday ) {
      return {
        className: 'rbc-disabled-day'
      };
    }
    return {className: 'rbc-aviable-day'};
  };
  return (
    <div className="flex flex-col w-full items-center justify-between">
      <h1 className="text-[2em]">Administrazione</h1>
      <div className="flex flex-col  max-w-[1000px] w-full max-h-[500px]">
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