import { customAxios } from "@/axios/axios.interceptor";
import { UseCalendarStore } from "@/store/calendarStore";

export async function saveUser() {
    const name = UseCalendarStore(state=> state.nameUser)
    const email = UseCalendarStore(state=> state.emailUser)
    const dayConfirm = UseCalendarStore(state=> state.dayConfirm)
    const price = UseCalendarStore(state=> state.priceData)
    const paquete = UseCalendarStore(state=> state.paquete)
    
    const request = await customAxios.post("calendar/date", { name: name, email: email, hour: dayConfirm?.hour, date: dayConfirm?.date, location: dayConfirm?.location, price: price, paquete: paquete }, {headers: {"Content-Type": "application/json"}})

    if (request.status === 200) {
        return true
    }

    return false
}