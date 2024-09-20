/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { customAxiosAdmin } from '@/axios/axios.interceptor';
import { Admin, DataDay } from '@/types';
import dayjs from 'dayjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateAdmin {
  admin: Admin | null
  sesion: boolean
  daySelectByAdmin: string
  daySelected: DataDay | null
  stateOfDay: string | null
  confirmedAppoiment : null
  allDayEnabledArray: DataDay[] | []
  fetchallDaysEnabled: ()=> Promise<void>
  changeDaySelected: (fecha: string) => void
  loginAdmin: (admin:Admin)=> void
  logoutAdmin: ()=> void
}

export const UseAdminStore = create<StateAdmin>()(persist((set,get) => ({
    admin: null,
    sesion: false,
    confirmedAppoiment: null,
    daySelected: null,
    async fetchallDaysEnabled() {
      try {
        const request = await customAxiosAdmin.get("administracion/day",{
          headers:{
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        
        if(request.status === 200){
          set({ allDayEnabledArray: request.data.days })
        }
      } catch (error) {
      }
    },
    allDayEnabledArray: [],
    stateOfDay: null,
    daySelectByAdmin: dayjs().format("YYYY-MM-DD") ,
    changeDaySelected(fecha) {
      set({ daySelectByAdmin: fecha.toString() })
      const { allDayEnabledArray, daySelectByAdmin } = get()
      const filteredDay = allDayEnabledArray.find(item=> item.date === daySelectByAdmin)
      if (filteredDay) {
        set({ daySelected: filteredDay, stateOfDay: filteredDay.state });
      } 
      if(filteredDay=== undefined){
        set({ daySelected: null, stateOfDay: null });
      }
    },
    loginAdmin(admin) {
      set({ admin: admin, sesion: true})
    },
    logoutAdmin() {
      set({ admin: null, sesion: false, daySelectByAdmin: dayjs().format("YYYY-MM-DD"), daySelected: null, stateOfDay: null, allDayEnabledArray: []})
      location.reload()
    },
    }),
    {
      name: 'admin', 
    }
  )
);
