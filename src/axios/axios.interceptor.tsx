/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { toast } from "sonner";

const baseUrl =  import.meta.env.VITE_ENV === "development" ? "http://localhost:4321/api/" : "http://35.238.166.54:8080/api/"

export const customAxios = axios.create({
  baseURL: baseUrl,
});


export const customAxiosAdmin = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});


export async function CustomAxiosAdmin (){
  customAxiosAdmin.interceptors.response.use(
      (response)=>{
        return response
      },
      async function (error) {
        const originalRequest = error.config
        if(error.response.status === 403 && !originalRequest._retry){
          originalRequest._retry = true
          try {
            await generateRefreshToken()
            toast.success("Token generado correctamente")
            setTimeout(()=>{
              location.reload()
            },2000)
            return customAxiosAdmin(originalRequest)
          } catch (error: unknown) {
            localStorage.clear();
          }
        }
        return Promise.reject(error)
      }
    );

}

async function generateRefreshToken() {
  try {
    await customAxiosAdmin.get('administracion/generate-token', {
      withCredentials: true, 
      headers: {
        "Content-Type": "application/json",
      }
    });
  } catch (error) {
    toast.error('No se pudo generar un nuevo token');
    throw new Error('No se pudo generar un nuevo token');
  }
}

