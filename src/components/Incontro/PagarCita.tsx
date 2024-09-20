import { UseCalendarStore } from "@/store/calendarStore"
import PaypalButton from "./PaypalButton"
import dayjs from "dayjs";
import 'dayjs/locale/it'; 
import { CalendarCheck, GeoLocationSalon, Reloj } from "../Icons";

const PagarCita = () => {
    dayjs.locale('it');
    const nameUser = UseCalendarStore(state=> state.nameUser)
    
    const emailUser = UseCalendarStore(state=> state.emailUser)
    const numberUser = UseCalendarStore(state=> state.numberUser)
    const dayConfirmed = UseCalendarStore(state => state.dayConfirm)
    const formatDate = (dateString:string) => {
        return dayjs(dateString).format('dddd, D MMMM');
    };
    return (
    <section className="z-0 border-x  px-1 w-full h-full">
        <h2 className="font-semibold">Dettagli dell'appuntamento</h2>
        <div className="w-full flex flex-col border mb-4 rounded p-1">
            
            <div className="flex w-full flex-col items-center my-1">
                <h3 className="font-semibold">Dati Utente</h3>
                { nameUser ? 
                    <div className="w-full items-start">
                        <h2> Nome: <span className="font-medium">{nameUser}</span>  </h2>
                        <h2> Email: <span className="font-medium">{emailUser} </span>  </h2>
                        <h2> Cellulare: <span className="font-medium">{numberUser}</span>  </h2>
                    </div>:
                    <h2 className="font-medium">Nessuno</h2> 
                }
            </div>

            {
                dayConfirmed &&
                <p className="flex items-center gap-2"> Data:  <span className="font-medium"> {formatDate(dayConfirmed?.date)}</span> <span> <CalendarCheck/> </span> </p>
            }
            <p className=" flex items-center gap-2"> Ora: <span className="font-medium">{dayConfirmed?.hour}</span> <span> <Reloj/> </span>  </p>
            <p className="flex items-center gap-2"> Ubicazione: <span className="font-medium"> {dayConfirmed?.location} </span> <span> <GeoLocationSalon/> </span>  </p>
        </div>
        <PaypalButton/>
    </section>
    )
}

export default PagarCita
