export interface event {
    start: Date
    end: Date
    title: string
}


interface DataDay {
  date: string
  disponibilidad: Disponibilidad[] | []
  state: string
  location: string
}

interface Disponibilidad{
  hour: string
  id: string
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