import { Event } from "./Event";

export interface EventsDatabase {
  events: Event[];
  getEvent: (id: number) => Event | undefined;
  getAverage: (event: Event) => number;
}
