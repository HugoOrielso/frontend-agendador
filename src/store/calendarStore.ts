import { customAxios } from '@/axios/axios.interceptor';
import { DataDay } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateCalendar {
    enabledDays: DataDay[];
    enabledDates: string[];
    daySelectedByUser: string ;
    getEnabledDays: () => Promise<void>;
    selectDayByUser: (date:string) => void;
}

export const UseCalendarStore = create<StateCalendar>()(persist((set) => ({
    enabledDays: [],
    daySelectedByUser: new Date().toISOString(),
    enabledDates: [],
    selectDayByUser(date) {
        set({daySelectedByUser: date})
    },
    async getEnabledDays() {
        try {
          const request = await customAxios.get("calendar/days");
          if (request.data) {
            const daysArray: DataDay[] = request.data;
            set({ enabledDays: daysArray });
            const filterDates = daysArray.filter(i => i.state === 'enabled')
            const datesArray = filterDates.map(i=>i.date)
            set({ enabledDates: datesArray });
          }
        } catch (error) {
          console.error('Error fetching enabled days:', error);
        }
      },
    }),
    {
      name: 'calendar', 
    }
  )
);
