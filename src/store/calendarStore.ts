import { customAxios } from '@/axios/axios.interceptor';
import { DataDay, DayConfirm } from '@/types';
import dayjs from 'dayjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateCalendar {
  enabledDays: DataDay[];
  allDates: DataDay[] | []
  enabledDates: string[];
  dayselectedByUser: DataDay | null
  dayConfirm: DayConfirm | null
  nameUser: string | null
  emailUser: string | null
  numberUser: string | null
  locationSalone: string | null
  priceData: number
  abono: boolean
  setAbono:  (date:boolean) => void;
  paquete: string,
  deleteDataUser: ()=> void
  setDataUser: (name:string, email: string, number: string)=> void
  setDayConfirm: (dayConfirmado: DayConfirm)=> void
  changeDaySelectedByUser: ()=> void
  dateSelectedByUser: string;
  getEnabledDays: () => Promise<void>;
  selectDayByUser: (date:string) => void;
  setPriceData: (pricing:number, name: string) => void;
}

export const UseCalendarStore = create<StateCalendar>()(persist((set,get) => ({
    enabledDays: [],
    dateSelectedByUser: dayjs().format("YYYY-MM-DD"),
    enabledDates: [],
    allDates: [],
    selectedByUser: null,
    dayselectedByUser: null,
    dayConfirm: null,
    emailUser: null,
    nameUser: null,
    locationSalone: null,
    numberUser: null,
    priceData: 50,
    paquete: "",
    abono: false,
    setAbono(date) {
      set({abono:date})
    },
    setPriceData(pricing, name) {
      set({priceData: pricing, paquete: name })
    },
    deleteDataUser() {
      set({ nameUser: null, emailUser: null, numberUser: null })
    },
    setDataUser(name, email, number) {
      set({ nameUser: name, emailUser: email, numberUser: number})
    },
    setDayConfirm(dayConfirmado) {
      set({ dayConfirm: dayConfirmado })
    },
    changeDaySelectedByUser() {
      const { allDates ,dateSelectedByUser } = get()
      const daySelected = allDates.find(item=> item.date === dateSelectedByUser)
      set({ dayselectedByUser: daySelected })
    },
    selectDayByUser(date) {
      set({dateSelectedByUser: date})
    },
    async getEnabledDays() {
      try {
        const request = await customAxios.get("calendar/days");
        if (request.data) {
          const daysArray: DataDay[] = request.data.days;
          const location = window.location.href.split("/")[3] === 'incontrope' ? 'pescara' : 'sambenedetto'
          const filterDates = daysArray.filter(i => i.state === 'enabled' && i.location === location )
          const datesArray = filterDates.map(i=>i.date)
          set({ enabledDates: datesArray, allDates: daysArray, locationSalone: location });
        }
      } catch (error) {
        console.log(error);
      }
    },
    }),
    {
      name: 'calendar', 
    }
  )
);
