import JoinBtn from "../components/JoinBtn";
import { useState } from "react";
import Comment from "../components/Comment";
import Star from "../components/Star";
function Event() {
  const [member, setMember] = useState(1);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  interface Comment {
    id: number;
    text: string;
  }

  function createComment() {
    let cloneComments: Comment[] = [...comments];
    cloneComments.push({
      id: comments.length + 1,
      text: value,
    });
    setComments(cloneComments);
  }

  return (
    <>
      <div className="event">
        <div style={{ marginTop: "2em" }}>
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
        <Star />
      </div>
    </>
  );
}

export default Event;
