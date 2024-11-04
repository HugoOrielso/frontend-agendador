export interface event {
    start: Date
    end: Date
    title: string
}


interface Question{
  id: number
  question: string
  answers: answer[]
  userSelectAnswer: number
}



interface answer{
  name: string
  pricing: number
}

interface User{
  name: string
  email: string
  number: string
}

interface NewEvent{
  summary: string
  location: string
  start: {
    dateTime: string,
    timeZone: string
  },
  end: {
    dateTime: string
    timeZone: string
  },
  attendes: [
    {email: string, displayName: string}
  ]
}

interface DataDay {
  date: string
  disponibilidad: Disponibilidad[] | []
  state: string
  location: string
}

interface Disponibilidad{
  hour: string
  user: string | null
}
  
interface DayConfirm{
  date: string
  hour: string
  location: string
}

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

interface Admin{
  name: string,
  rol: string
}