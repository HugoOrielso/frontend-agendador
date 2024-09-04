/* eslint-disable @typescript-eslint/no-unused-vars */
import { customAxios } from "@/axios/axios"
import { Toaster , toast} from 'sonner'
const MyDates = () => {

  async function getUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const form = e.currentTarget as HTMLFormElement;
    
    const data = Object.fromEntries(new FormData(form));
    console.log(data);
    
    try {
      const response = await customAxios.get(`users/${data.email}`);
      
      if (response.status === 200 && response.data.status == 'no content') {
        toast.info('No tenemos citas agendadas con tu correo');
      } else if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error('Hubo un problema al obtener la información');
    }
  }
  
  return (
    <section className="flex flex-col items-center justify-center w-full  ">
        <div className="flex flex-col items-center justify-ccenter w-full p-2">
            <form onSubmit={getUser} className="flex flex-col items-center justify-center w-full max-w-[90%] gap-4 border rounded p-3 sm:p-8">
                <h1 className="sm:text-2xl text-[#E92176]">Controlla se hai appuntamenti nella nostra agenda</h1>
                <label htmlFor="email" className="flex flex-col text-lg sm:text-2xl w-full max-w-[700px]">
                  Email:
                  <input type="email" id="email" name="email"  className="flex transition-all duration-500 focus:bg-[#DEE7FF] rounded w-full border p-8"/>
                </label>
                
                <button className="flex rounded text-lg sm:text-2xl bg-[#202945] p-4 max-w-36 items-center justify-center w-full text-white transition-all duration-300 hover:bg-[#2c3c6c]">Consultare</button>
            </form>
        </div>
        <Toaster richColors/>
    </section>
  )
}

export default MyDates