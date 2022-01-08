import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import EventView from "./views/EventView";
import EventsContext from "./context/EventsContext";
import { EventDatabase } from "./db/EventDatabase";

function App() {
  const events = [
    {
      title: "Art",
      description: "event1",
      id: 1,
      date: new Date("2022-01-25"),
      rating: 0,
    },
    {
      title: "Sport",
      description: "event2",
      id: 2,
      date: new Date("2022-01-20"),
      rating: 0,
    },
    {
      title: "Fire Festival",
      description: "event4",
      id: 4,
      date: new Date("2022-01-06"),
      rating: 0,
    },
    {
      title: "Languge",
      description: "event3",
      id: 3,
      date: new Date("2022-02-01"),
      rating: 0,
    },
  ];

  const eventDatabase: EventDatabase = {
    events: events,
    getEvent: (id: number) => {
      return events.find((e) => e.id === id);
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
