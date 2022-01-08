import * as React from "react";
import { EventsDatabase } from "../models/EventsDatabase";

const defaultState: EventsDatabase = {
  events: [],
  getEvent: () => undefined,
  getAverage: () => 0,
};

const EventsContext = React.createContext<EventsDatabase>(defaultState);

export default EventsContext;
