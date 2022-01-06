import { useState } from "react";
interface Props {
  member: number;
  setMember: (value: number) => void;
}
function JoinBtn({ member, setMember }: Props) {
  const [join, setJoin] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (join === false) {
            setJoin(true);
            setMember(member + 1);
          } else if (join === true && member > 1) {
            setJoin(false);
            setMember(member - 1);
          }
        }}
      >
        {join ? "Joined" : "Join"}
      </button>
    </>
  );
}

export default JoinBtn;
