import DatosConfirmados from "./DatosUser";
import 'dayjs/locale/it'; 
import Precio from "./Precio";
import { UseCalendarStore } from "@/store/calendarStore";
import PaypalButtonTotalPrice from "../buttonsPaypal/PaypalButtonTotalPrice";
import PaypalButtonAbono from "../buttonsPaypal/PaypalButtonAbono";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PagarCita = () => {
    const abono = UseCalendarStore((state) => state.abono);
    const nameUser = UseCalendarStore(state=> state.nameUser)
    const emailUser = UseCalendarStore(state=> state.emailUser)
    const numberUser = UseCalendarStore(state=> state.numberUser)
    const paquete = UseCalendarStore((state) => state.paquete);
    const precio = UseCalendarStore((state) => state.priceData);
    useEffect(()=>{
    },[abono])
    return (
        <section className=" flex flex-col md:flex-row text-start h-full  items-center md:justify-evenly justify-center w-full rounded  ">
            <div className="w-full gap-2 text-zinc-700 ">
                <DatosConfirmados/>
                <p>Il prezzo varia a seconda del servizio, anche se sei un utente che ha già effettuato un servizio.</p>
                <p > <span className="font-semibold text-black"> Prezzo minimo: 50€ </span>, 
                minimo per poter prenotare l'appuntamento </p>
            </div>
            <motion.div className="flex flex-col rounded w-full items-center justify-center">
                <h1 className="text-lg font-semibold">Pagamenti</h1>
                {nameUser && emailUser && numberUser && paquete ?
                <section className="flex flex-col  gap-2 items-center justify-evenly w-full">
                    <Precio/>
                    <div className="w-full">

                    {abono ? 
                    <div className="w-full flex items-center justify-center md:gap-4 md:px-2">
                        <span className="text-3xl">{precio}€</span>
                        <PaypalButtonTotalPrice/>
                    </div>

                    :
                    <div className="w-full flex items-center justify-center md:gap-4 md:px-2">
                        <span className="text-3xl">50€</span>
                        <PaypalButtonAbono/>
                    </div>
                    }

                    <p className="text-sm md:text-xl font-semibold text-gray-800 md:px-2">{paquete} ✅</p>
                    <p className="text-sm md:text-xl font-semibold text-gray-800 md:px-2">Totale: {precio}€</p>
                    </div>
                </section>
                :
                <div>
                    <p className="text-sm px-2">Riccioluta! 😃, Per favore, completa i dati del modulo per abilitare la sezione dei pagamenti. Questi dati sono necessari per identificare la persona che effettua il pagamento e per memorizzare correttamente le informazioni. Non dimenticare di selezionare anche il servizio, poiché è necessario. </p>
                </div>
                }
            </motion.div>
        </section>
    )
}

export default PagarCita
