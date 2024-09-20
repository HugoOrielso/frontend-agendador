import { customAxios } from '@/axios/axios.interceptor'
import { UseCalendarStore } from '@/store/calendarStore'
import axios from 'axios'
import { FormEvent } from 'react'
import { toast } from 'sonner'
type dataFromForm = {
    email: string
    nombre: string
    celular: string
}

const ValidarExistenciaDelUsuario = () => {
    const setDataUser = UseCalendarStore(state=> state.setDataUser)
    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.currentTarget)) as dataFromForm
        if(!data.nombre){
            toast.warning('Riccioluta manca el tuo nome 😒')
        } 
        if(!data.email){
            toast.warning('Riccioluta manca el tuo email 😒')
        }     
        if(!data.celular){
            toast.warning('Riccioluta manca el tuo cellulare 😒')
        }    

        try {
            const request = await customAxios("users/" + data.email)
            if(request.status === 204){
                toast.info("Riccioluta non aviamo nessun buono per te 😒")
            }
            setDataUser(data.nombre,data.email,data.celular)
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast("error")
            }            
        }
    }

    return (
    <section className='border-x h-full w-full items-center justify-start px-1 pb-1 flex flex-col'>
        <h2 className="font-semibold">¡Riccioluta! siamo all'ultimo passaggio, conferma i tuoi dati</h2>
        <p>Così posiamo vedere se hai buono di sconto</p>
        <form onSubmit={handleSubmit} className="flex w-[95%] flex-col items-center justify-center sm:w-full max-w-[500px] gap-3 mt-8 border rounded p-4 sm:p-6 ">
            <label htmlFor="email" className="w-full">
                <span>Email:</span>
                <input type="email" id="email" name="email" required className="w-full border p-2 rounded" />
            </label>
            <label htmlFor="nombre" className="w-full">
                <span>Nome:</span>
                <input type="text" id="nombre" name="nombre" required className="w-full border p-2 rounded"/>
            </label>
            <label htmlFor="celular" className="w-full">
                <span>Cellulare:</span>
                <input type="text" id="celular" name="celular" required className="w-full border p-2 rounded"/>
            </label>
            <button className=" border p-3 rounded">Enviare</button>
        </form>

        <div>

        </div>


    </section>
  )
}

export default ValidarExistenciaDelUsuario