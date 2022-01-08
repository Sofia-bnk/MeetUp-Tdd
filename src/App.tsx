import { useState } from "react";

import "./App.css";
import Home from "./views/Home";
import { Event } from "./models/Event";

function App() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Art",
      description: "event1",
      id: 1,
      date: new Date("2022-01-25"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Sport",
      description: "event2",
      id: 2,
      date: new Date("2022-01-20"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Fire Festival",
      description: "event4",
      id: 4,
      date: new Date("2022-01-06"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Languge",
      description: "event3",
      id: 3,
      date: new Date("2022-02-01"),
      rating: 0,
      ratings: [],
    },
  ]);

  function updateEvent(event: Event) {
    let updated = events.filter((e) => e.id !== event.id);
    updated.push(event);
    setEvents(updated);
  }

  return (
    <div className="App">
      <Home events={events} updateEvent={updateEvent} />
    </div>
  );
}

export default App;
