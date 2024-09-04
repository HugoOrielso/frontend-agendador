import { event } from "@/types";
import dayjs from "dayjs";




export const events:event[] = [
    {
        start: dayjs('2024-08-31T12:00:00').toDate(),
        end: dayjs('2024-08-31T13:00:00').toDate(),
        title: "ejemplo 1"
    },
    {
        start: dayjs('2024-08-31T14:00:00').toDate(),
        end: dayjs('2024-08-31T15:00:00').toDate(),
        title: "ejemplo 2"
    },
    {
        start: dayjs('2024-08-28T14:00:00').toDate(),
        end: dayjs('2024-08-28T15:00:00').toDate(),
        title: "ejemplo 3"
    }
]