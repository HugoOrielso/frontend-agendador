import { customAxios } from '@/axios/axios';
import { Disponibilidad } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateCalendar {
    enabledDays: Disponibilidad[];
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
            const daysArray: Disponibilidad[] = request.data;
            set({ enabledDays: daysArray });
            const datesArray = daysArray.map((day: Disponibilidad) => day.date);
            set({ enabledDates: datesArray });
          }
        } catch (error) {
          console.error('Error fetching enabled days:', error);
        }
      },
    }),
    {
      name: 'calendar', // unique name for storage
    }
  )
);
