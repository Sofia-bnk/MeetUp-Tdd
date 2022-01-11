import JoinBtn from "../components/JoinBtn";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Event } from "../models/Event";
import "./EventView.css";

interface Props {
  event: Event;
  onClose: () => void;
  onRateEvent: (rating: number) => void;
}

function EventView({ event, onClose, onRateEvent }: Props) {
  const [member, setMember] = useState(1);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState(0);

  interface Comment {
    id: number;
    text: string;
  }

  function handleRating(rate: number) {
    setRating(rate);
    onRateEvent(rate);
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

  return (
    <div className="event">
      <div className="join">
        <JoinBtn member={member} setMember={setMember} />
        <span className="going">{member} going</span>
      </div>
      <header>
        <h1>{event.title}</h1>
      </header>

      <main>
        <div className="starGrid">
          <Rating onClick={handleRating} ratingValue={rating} />
          <div className="rating">Rating: {event.rating}</div>
        </div>

        <p className="description">{event.description}</p>
        <span>Leave a comment: </span>
        <input
          type="text"
          onChange={(event: any) => setValue(event.target.value)}
        />
        <button onClick={() => createComment()} className="sendBtn">
          Send
        </button>

        <div className="grid">
          {comments.map((comment) => (
            <p key={comment.id} id={comment.text}>
              {comment.text}
            </p>
          ))}
        </div>
      </main>
      <footer>
        <button onClick={onClose} className="homeBtn">
          Back to see events
        </button>
      </footer>
    </div>
  );
}

export default EventView;
