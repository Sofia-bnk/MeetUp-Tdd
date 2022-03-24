import { useState } from "react";

import "./App.css";
import Home from "./views/Home";
import { Event } from "./models/Event";

function App() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Art",
      description:
        " Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts.[1][8] Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences.",
      id: 1,
      date: new Date("2022-10-25"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Sport",
      description:
        "Five Barcelona players have received the green light to return to action ahead of Wednesday’s Spanish Supercopa semifinal against Real Madrid",
      id: 2,
      date: new Date("2022-09-20"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Fire Festival",
      description:
        "The event was promoted on Instagram by social media influencers including Kendall Jenner, Bella Hadid, Hailey Baldwin and Emily Ratajkowski, many of whom did not initially disclose they had been paid to do so.[1] During the Fyre Festival's inaugural weekend, the event experienced problems related to security, food, accommodation",
      id: 4,
      date: new Date("2022-08-06"),
      rating: 0,
      ratings: [],
    },
    {
      title: "Languge",
      description:
        "A language is a structured system of communication used by humans. Languages can be based on speech and gesture",
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
