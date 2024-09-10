import { customAxiosAdmin } from '@/axios/axios.interceptor'
import { UseAdminStore } from '@/store/adminStore'
import { Toaster, toast } from 'sonner'
import {AxiosError} from 'axios'
import React, { useState } from 'react'

const AdminLogin = () => {
    const [executing,setExecuting] = useState<boolean>(false)
    const loginStore = UseAdminStore(state => state.loginAdmin)
    
    async function iniciarSesion(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setExecuting(true)
        const data = Object.fromEntries(new FormData(event.currentTarget)) as { email: string, password: string };
        setTimeout(()=>{
            setExecuting(false)
        },2000)

        try {
            const request = await customAxiosAdmin.post("administracion/login",{email:data.email, password: data.password}, {
                headers: {
                  "Content-Type": "application/json"
                }
            });
            if (request.status === 200) {
                toast.success('Inicio de sesión exitoso.');
                setTimeout(()=>{
                    loginStore(request.data.admin)
                    location.href = "/administrazione/inizio"
                },2000)
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {
                    toast.error('Credenciales incorrectas.');
                } else {
                    toast.error('Error en la solicitud.');
                }
            } else {
                toast.error('Error desconocido.');
            }
        }
    }

    return (
    <section className='flex flex-col items-center justify-center min-h-screen w-full'>
        <div className=' flex flex-col w-full items-center justify-center rounded mx-4'>
            <form onSubmit={iniciarSesion} className='flex flex-col items-center justify-center w-[95%] max-w-[600px] text-white bg-[#202945] p-4 rounded mx-4'>
                <h1 className='text-[2em]'>Login</h1>
                <label htmlFor="email" className='flex w-full flex-col'> 
                    Email
                    <input type="email" name='email' id='email' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                    required
                    autoComplete='current-email'
                    defaultValue={"audrey@gmail.com"}
                    />
                </label>
                <label htmlFor="password" className='flex w-full flex-col'>
                    Password
                    <input type="password" name='password' id='password' className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
                    required
                    autoComplete='current-password'
                    defaultValue={"contraseña"}
                    />
                </label>
                {executing ? 
                <button type='submit' className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out w-full hover:scale-95 duration-300 active:scale-105'  disabled>Enviare</button> 
                :
                <button type='submit' className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out w-full hover:scale-95 duration-300 active:scale-105'  >Enviare</button>
                }
            </form>
        </div>
        <Toaster richColors/>
    </section>
  )
}

export default AdminLogin