import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlip } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isUp, flip] = useFlip();

  // REPLACED BY CUSTOM HOOK ABOVE
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp((isUp) => !isUp);
  // };

  return (
    <img
      src={isUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
