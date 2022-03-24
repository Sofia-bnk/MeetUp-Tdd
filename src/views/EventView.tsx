import JoinBtn from "../components/JoinBtn";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Event } from "../models/Event";
import "./EventView.css";

interface Props {
  event: Event;
  onClose: () => void;
  onRateEvent: (rating: number) => void;
}

function EventView({ event, onClose, onRateEvent }: Props) {
  const [member, setMember] = useState<number>(1);
  const [joined, setJoined] = useState(false);

  const [value, setValue] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const members = localStorage.getItem(event.id + "-member");
    const newMembers = members === null ? 1 : parseInt(members);
    setMember(newMembers);

    const x = localStorage.getItem(event.id + "-comment");

    const newComment = x === null ? [] : JSON.parse(x);
    setComments(newComment);

    const isJoined = "true" === localStorage.getItem(event.id + "-join");

    setJoined(isJoined);
  }, []);

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
    localStorage.setItem(event.id + "-comment", JSON.stringify(cloneComments));

    setComments(cloneComments);
  }

  function handleJoin(updatedMembers: number) {
    const newStateOfJoined = joined ? false : true;

    setJoined(newStateOfJoined);
    setMember(updatedMembers);

    localStorage.setItem(event.id + "-join", newStateOfJoined.toString());
    localStorage.setItem(event.id + "-member", updatedMembers.toString());
  }

  return (
    <div className="event">
      <div className="join">
        <JoinBtn member={member} setMember={handleJoin} joined={joined} />
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
