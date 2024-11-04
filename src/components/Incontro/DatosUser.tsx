import { UseCalendarStore } from "@/store/calendarStore";
import dayjs from "dayjs";

const DatosConfirmados = () => {
    dayjs.locale('it');
    const nameUser = UseCalendarStore(state=> state.nameUser)
    const emailUser = UseCalendarStore(state=> state.emailUser)
    const numberUser = UseCalendarStore(state=> state.numberUser)

  return (
    <section className="flex  w-full items-center justify-center">
        <div className="flex flex-col  text-start w-full items-center justify-center my-1 text-black">
            <h3 className="font-semibold text-center">Dati Utente</h3>
            { nameUser ? 
                <div className="flex flex-col w-full items-start justify-center">
                    <p>Nome: <span className="font-medium">{nameUser} ✅</span>  </p>
                    <p>Email:  <span className="font-medium">{emailUser} ✅</span>  </p>
                    <p>Cellulare: <span className="font-medium">{numberUser} ✅</span>  </p>
                </div>:
                <h2 className="font-medium">Nessuno</h2> 
            }

        </div>
    </section>
  )
}

export default DatosConfirmados