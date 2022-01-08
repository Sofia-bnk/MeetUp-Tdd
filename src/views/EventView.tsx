import JoinBtn from "../components/JoinBtn";
import { useState } from "react";
import Comment from "../components/Comment";
import { Rating } from "react-simple-star-rating";
import { Event } from "../models/Event";
import { rawListeners } from "process";

interface Props {
  event: Event;
  onClose: () => void;
  onRateEvent: (rating: number) => void;
}

function EventView({ event, onClose, onRateEvent }: Props) {
  const [member, setMember] = useState(1);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState(event.rating);

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
    <>
      <button onClick={onClose}>Home</button>

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
        <Rating onClick={handleRating} ratingValue={rating} />
        <div>Rating: {event.rating}</div>
      </div>
    </>
  );
}

export default EventView;
