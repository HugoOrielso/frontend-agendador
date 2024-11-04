import { UseCalendarStore } from '@/store/calendarStore';
import dayjs from 'dayjs';
import { CalendarCheck, GeoLocationSalon, Reloj } from "../Icons";


const DatosCita = () => {
    const dayConfirmed = UseCalendarStore(state => state.dayConfirm)
    const formatDate = (dateString:string) => {
        return dayjs(dateString).format('dddd, D MMMM');
    };
    return (
    <section className='h-full w-full  border rounded '>
        {
            dayConfirmed &&
            <div className="flex flex-col px-2 md:flex-row w-full my-2 items-start justify-evenly " >
                <p className="flex items-center gap-2"> 
                    <CalendarCheck/>  Data:  
                    <span className="font-medium"> {formatDate(dayConfirmed?.date)}</span> 
                </p>
                <p className="flex items-center gap-2"> 
                    <Reloj/> Ora: 
                    <span className="font-medium">{dayConfirmed?.hour}</span> 
                </p>
                <p className="flex items-center gap-2"> 
                    <GeoLocationSalon/> Ubicazione: 
                    <span className="font-medium"> {dayConfirmed?.location} </span>   
                </p>
            </div>
        }
    </section>
  )
}

export default DatosCita