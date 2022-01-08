import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import EventView from "./views/EventView";
import EventsContext from "./context/EventsContext";
import { EventsDatabase } from "./models/EventsDatabase";
import { Event } from "./models/Event";

function App() {
  const events: Event[] = [
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
  ];

  const eventDatabase: EventsDatabase = {
    events: events,
    getEvent: (id: number) => {
      return events.find((e) => e.id === id);
    },
    getAverage(event: Event) {
      if (event.ratings.length === 0) {
        return 0;
      }
      let sum: number = 0;
      event.ratings.map((ratings) => (sum += ratings));
      return Math.round(sum / event.ratings.length);
    },
  };
  return (
    <div className="App">
      <EventsContext.Provider value={eventDatabase}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/event/:id" component={EventView}></Route>
          </Switch>
        </Router>
      </EventsContext.Provider>
    </div>
  );
}

export default App;
