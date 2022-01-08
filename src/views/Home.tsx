import { useContext } from "react";

import Header from "../components/Header";
import { Event } from "../models/Event";
import { useHistory } from "react-router-dom";

import "./Home.css";
import { EventsDatabase } from "../models/EventsDatabase";
import EventsContext from "../context/EventsContext";

function Home() {
  const { events, getAverage } = useContext<EventsDatabase>(EventsContext);

  const history = useHistory();

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
              onClick={() => history.push(`/event/${event.id}`)}
              className="eventBtn"
            >
              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <p>{event.date.toDateString()}</p>
              <p>{getAverage(event)}</p>

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
