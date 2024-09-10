import { Admin, DataDay } from '@/types';
import dayjs from 'dayjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateAdmin {
  admin: Admin | null
  sesion: boolean
  daySelected: DataDay | null
  stateOfDay: string | null
  changeDaySelected: (daySelected: DataDay | null) => void
  changeState: (state:string | null)=> void
  daySelectByAdmin: string
  loginAdmin: (admin:Admin)=> void
  logoutAdmin: ()=> void
  setDaySelectByUser: (date: string)=> void
}

export const UseAdminStore = create<StateAdmin>()(persist((set) => ({
    admin: null,
    sesion: false,
    daySelected: null,
    stateOfDay: null,
    daySelectByAdmin: dayjs().format("YYYY-MM-DD") ,
    changeDaySelected(daySelected) {
      set({daySelected: daySelected})
    },
    changeState(state) {
      set({stateOfDay: state})
    },
    loginAdmin(admin) {
      set({ admin: admin, sesion: true})
    },
    setDaySelectByUser(date) {
      set({ daySelectByAdmin: date.toString()})    
    },
    logoutAdmin() {
      set({ admin: null, sesion: false, daySelectByAdmin: dayjs().format("YYYY-MM-DD")})
    },
    }),
    {
      name: 'admin', 
    }
  )
);
