import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCards({ cardsArray, error }) {
  const [cardCounter, setCardCounter] = useState(0);
  const [flip, setFlip] = useState(false);
  const [flipCSS, setFlipCSS] = useState("container border border-primary");
  const [side, setSide] = useState("front");
  const [nextButton, setNextButton] = useState(null);
  const [showRestartButton, setShowRestartButton] = useState(null);

  const history = useHistory();

  //   side handler use effect and checks if at end of deck
  useEffect(() => {
    const sideHandler = () => {
      if (cardCounter === cardsArray?.length - 1) {
        setNextButton(null);
        setShowRestartButton(
          <button
            type="button"
            className="btn btn-secondary mx-3 px-0 col-2 mb-3"
            onClick={resetHandler}
          >
            Restart
          </button>
        );
      } else if (!flip) {
        setSide("front");
        
      } else {
        setSide("back");
      
      }
    };
    sideHandler();
  }, [flip, cardCounter, cardsArray]);

  const flipHander = () => {
    // something like if flip is true, show {cardsArray[cardCounter].front and if false {cardsArray[cardCounter].back
    setFlip(!flip);
    if (flip) {
      setFlipCSS("container border border-primary");
      setNextButton(null);
    } else {
      setFlipCSS("container border border-info bg-light");
      setNextButton(
        <button
          type="button"
          className="btn btn-secondary mx-3 px-0 col-2 mb-3"
          onClick={nextHandler}
        >
          <span>Next</span>
        </button>
      );
    }
  };

  const nextHandler = () => {
    setCardCounter(cardCounter + 1);
    setFlip(false);
    setFlipCSS("container border border-primary");
  };

  //   reset handler asks a windows prompt, then reset all the states back to what their default was
  const resetHandler = () => {
    if (
      window.confirm(
        "Are you sure you want to restart? Hit cancel to return to homepage"
      )
    ) {
      setCardCounter(0);
      setShowRestartButton(null);
      setSide("front");
      setFlip(false);
      setFlipCSS("container border border-primary");
    } else {
      history.push("/");
    }
  };

  //   console.log("The Cards Array is", cardsArray);
  // error comes from setError in StudyView.js (typically will be when 404)
  if (error) {
    return error.message;
  }
  if (!cardsArray) {
    return <p>Loading . . .</p>;
  } else {
    return (
      <div className={flipCSS}>
        <h4 className="p-2">
          Card {cardsArray[cardCounter].id} of {cardsArray.length}
        </h4>
        <p className="p-2"> {cardsArray[cardCounter][side]}</p>
        <button
          type="button"
          className="btn btn-primary mx-3 px-0 col-2 mb-3"
          onClick={flipHander}
        >
          Flip
        </button>
        {nextButton}
        {showRestartButton}
      </div>
    );
  }
}

export default StudyCards;
