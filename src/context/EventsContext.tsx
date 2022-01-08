import * as React from "react";
import { EventDatabase } from "../db/EventDatabase";

const defaultState: EventDatabase = {
  events: [],
  getEvent: () => undefined,
};

const EventsContext = React.createContext<EventDatabase>(defaultState);

export default EventsContext;
