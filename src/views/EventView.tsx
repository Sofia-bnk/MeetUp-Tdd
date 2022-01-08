import JoinBtn from "../components/JoinBtn";
import { useState, useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import Comment from "../components/Comment";
import { Rating } from "react-simple-star-rating";
import { Event } from "../models/Event";
import { EventsDatabase } from "../models/EventsDatabase";
import EventsContext from "../context/EventsContext";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

function EventView({ match }: Props) {
  const [member, setMember] = useState(1);
  const [value, setValue] = useState("");
  const [event, setEvent] = useState<Event | undefined>(undefined);

  const [comments, setComments] = useState<Comment[]>([]);

  const { events, getEvent } = useContext<EventsDatabase>(EventsContext);

  useEffect(() => {
    let eventId: number = Number(match.params.id) || 0;
    setEvent(getEvent(eventId));
  }, [events, match.params.id, getEvent]);

  const handleRating = (rate: number) => {
    if (event) {
      event.ratings.push(rate);
    }
  };

  interface Comment {
    id: number;
    text: string;
  }

  function createComment() {
    let cloneComments: Comment[] = [
      ...comments,
      {
        id: comments.length + 1,
        text: value,
      },
    ];

    setComments(cloneComments);
  }

  if (event) {
    return (
      <>
        <div className="event">
          <div style={{ marginTop: "2em" }}>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <input
              type="text"
              onChange={(event: any) => setValue(event.target.value)}
            />
            <button onClick={() => createComment()}>Send</button>
          </div>
          <JoinBtn member={member} setMember={setMember} />
          <p className="going">{member} going</p>
          <div className="grid">
            {comments.map((comment) => (
              <Comment key={comment.id} text={comment.text} />
            ))}
          </div>
        </div>
        <div className="starGrid">
          <Rating onClick={handleRating} ratingValue={event.rating} />
        </div>
      </>
    );
  }
  return <>Not Found</>;
}

export default EventView;
