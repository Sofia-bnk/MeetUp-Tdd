import { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface Props {
  rating: number;
  setRating: (value: number) => any;
}

function Star({ rating, setRating }: Props) {
  const [stars, setStars] = useState<number[]>([]);

  let starsClone: number[] = [...stars];

  const handleRating = (rate: number) => {
    setRating(rate);
    starsClone.push(rate);
    setStars(starsClone);
    rateAverage();
  };
  function rateAverage() {
    let sum: number = 0;
    starsClone.map((star) => (sum += star));
    setRating(Math.round(sum / starsClone.length));
  }
  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  );
}
export default Star;
