interface Props {
  member: number;
  setMember: (value: number) => void;
  joined: boolean;
}
function JoinBtn({ member, setMember, joined }: Props) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (joined) {
            setMember(member - 1);
          } else {
            setMember(member + 1);
          }
        }}
      >
        <p className="btnText">{joined ? "Joined" : "Join"}</p>
      </button>
    </>
  );
}

export default JoinBtn;
