import { useState } from "react";

import Header from "../components/Header";
import { Event } from "../models/Event";
import EventView from "../views/EventView";
import { Rating } from "react-simple-star-rating";

import "./Home.css";

interface Props {
  events: Event[];
  updateEvent: (event: Event) => void;
}

function Home({ events, updateEvent }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
    undefined
  );

  function checkIfPassed(event: Event) {
    return event.date.getTime() < new Date().getTime();
  }

  const handleRating = (rating: number) => {
    if (selectedEvent) {
      let update = { ...selectedEvent };
      update.ratings.push(rating);
      update.rating = calculateAverage(update);
      setSelectedEvent(update);
      updateEvent(update);
    }
  };

  function calculateAverage(event: Event) {
    if (event.ratings.length === 0) {
      return 0;
    }
    let sum: number = 0;
    event.ratings.map((ratings) => (sum += ratings));
    return Math.round(sum / event.ratings.length);
  }

  if (selectedEvent) {
    return (
      <>
        <EventView
          event={selectedEvent}
          onClose={() => setSelectedEvent(undefined)}
          onRateEvent={handleRating}
        />
      </>
    );
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
              onClick={() => setSelectedEvent(event)}
              className="eventBtn"
            >
              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <p>{event.date.toDateString()}</p>
              <p>
                <Rating readonly ratingValue={event.rating} />
              </p>

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
