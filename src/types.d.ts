export interface event {
    start: Date
    end: Date
    title: string
}


interface Disponibilidad {
    date: string; // YYYY-MM-DD format
    disponibilidad: string[] | []; // Array of available times in HH:mm format
  }
  
  // Define the structure for a calendar event
  interface CalendarEvent {
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
  }