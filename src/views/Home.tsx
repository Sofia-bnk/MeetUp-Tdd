import Header from "../components/Header";
import { Event } from "../models/EventData";
import { useHistory } from "react-router-dom";

import "./Home.css";

function Home() {
  const history = useHistory();
  const events: Event[] = [
    {
      title: "Art",
      description: "event1",
      id: 1,
      date: new Date("2022-01-25"),
    },
    {
      title: "Sport",
      description: "event2",
      id: 2,
      date: new Date("2022-01-20"),
    },
    {
      title: "Fire Festival",
      description: "event4",
      id: 4,
      date: new Date("2022-01-06"),
    },
    {
      title: "Languge",
      description: "event3",
      id: 3,
      date: new Date("2022-02-01"),
    },
  ];

  function checkIfPassed(event: Event) {
    return event.date.getTime() < new Date().getTime();
  }

  return (
    <>
      <Header />

      <div className="grid">
        {events
          .sort((a, b) => a.date.getTime() - b.date.getTime())
          .map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => history.push(`/event/${event.title}`)}
              className="eventBtn"
            >
              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <p>{event.date.toDateString()}</p>
              {checkIfPassed(event) ? (
                <span style={{ color: "red" }}>This event is passed</span>
              ) : null}
            </button>
          ))}
      </div>
    </>
  );
}

export default Home;
