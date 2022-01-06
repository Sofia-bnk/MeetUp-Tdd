interface Props {
  text: string;
}

function Comment({ text }: Props) {
  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default Comment;
