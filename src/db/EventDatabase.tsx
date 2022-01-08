import { Event } from "../models/Event";

export interface EventDatabase {
  events: Event[];
  getEvent: (id: number) => Event | undefined;
}
