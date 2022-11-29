import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewDeck({ currentDeck }) {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    function currentDeckMap(currentDeck) {
      if (currentDeck !== 0) {
        let listedCards = currentDeck?.cards.map((currentCard, i) => {
          console.log(currentCard);
        });
      }
      currentDeckMap();
    }
  }, []);

  console.log("Current Deck is", currentDeck);
  return (
    <div>
      <h3> {currentDeck?.name} </h3>
      <p> {currentDeck?.description} </p>
      <div>
        <Link
          to={"/"}
          type="button"
          className="btn btn-secondary mr-2 p-0 py-2 col-2"
        >
          <span className="oi oi-pencil"></span> Edit
        </Link>
        <Link
          to={"/"}
          type="button"
          className="btn btn-primary mx-2 p-0 py-2 col-2"
        >
          <span className="oi oi-book"></span> Study
        </Link>
        <Link
          to={"/"}
          type="button"
          className="btn btn-primary mx-2 p-0 py-2 col-3"
        >
          <span className="oi oi-plus"></span> Add Cards
        </Link>
        <button
          type="button"
          className="btn btn-danger ml-2 p-0 py-2 float-right col-1"
        >
          <span className="oi oi-trash"></span>
        </button>
      </div>
      <hr />
      <h2>Cards</h2>
    </div>
  );
}

export default ViewDeck;
