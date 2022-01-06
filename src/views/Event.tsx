import JoinBtn from "../components/JoinBtn";
import { useState } from "react";
import Comment from "../components/Comment";
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
    <div className="event">
      <input
        type="text"
        onChange={(event: any) => setValue(event.target.value)}
      />
      <button onClick={() => createComment()}>Send</button>

      <JoinBtn member={member} setMember={setMember} />
      <p>{member} going</p>
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} />
      ))}
    </div>
  );
}

export default Event;
