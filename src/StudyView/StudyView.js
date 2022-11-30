import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import StudyCards from "./StudyCards";
import { readDeck } from "../utils/api";

function StudyView({ currentDeck }) {
  const routeMatch = useRouteMatch();
  //   console.log(routeMatch);

  const [studyCards, setStudyCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStudyCards([]);
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        let deckID = routeMatch.params.deckId;
        let response = await readDeck(deckID, abortController.signal);
        setStudyCards(response);
      } catch (err) {
        setError(err);
      }
    }
    loadDeck();
    return () => abortController.abort();
  }, [routeMatch]);

  const cardsArray = studyCards?.cards?.map((currentCard, i) => {
    // i need to ignore and make my own card id cause if i delete a card it could heck it up. Or like how our default database the cards go 1,2,3,7
    // console.log(currentCard);
    return { id: i + 1, front: currentCard.front, back: currentCard.back };
  });
  // console.log("Card array", cardsArray);

  // console.log(studyCards.cards);
  // When the study cards legnth is less than 3 show a warning and give them a button to add cards to this deck
  if (studyCards?.cards?.length < 3) {
    return (
      <div>
        <h2>
          Study: <span>{studyCards?.name}</span>
        </h2>
        <h3>Not Enough Cards</h3>
        <p>
          You need at least 3 cards to study. There are{" "}
          {studyCards.cards.length} cards
        </p>
        <Link
          to={`/decks/${currentDeck.id}/cards/new`}
          type="button"
          className="btn btn-primary mx-auto py-4 col-12"
        >
          <span className="oi oi-plus"></span> Add Cards
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Study: <span>{studyCards?.name}</span></h2>
        <StudyCards cardsArray={cardsArray} error={error} />
      </div>
    );
  }
}

export default StudyView;
