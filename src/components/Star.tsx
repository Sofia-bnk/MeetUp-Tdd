import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Star() {
  const [stars, setStars] = useState<number[]>([]);
  const [average, setAverage] = useState<number>(0);
  let starsClone: number[] = [...stars];
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);

    starsClone.push(rate);
    setStars(starsClone);
    console.log(starsClone);
    rateAverage();
  };
  function rateAverage() {
    let sum: number = 0;
    starsClone.map((star) => (sum += star));
    setAverage(Math.round(sum / starsClone.length));
    return average;
  }
  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} />
      <p>Rate:{average}</p>
    </div>
  );
}
export default Star;
