import { Link } from "react-router-dom";

import CardList from "./CardList";
import deleteDeckHandler from "../HomePage/deleteDeckHandler";

function ViewDeck({ currentDeck, cards, setDecks, allDecks, cardsLoaded, error }) {

  if (error) {
    return error.message
  }
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
          <span className="oi oi-pencil"></span> Edit (needs link)
        </Link>
        <Link
          to={`/decks/${currentDeck.id}/study`}
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
          <span className="oi oi-plus"></span> Add Cards (needs link)
        </Link>
        <button
          type="button"
          className="btn btn-danger ml-2 p-0 py-2 float-right col-1"
          onClick={() => deleteDeckHandler(currentDeck.id, setDecks, allDecks)}
        >
          <span className="oi oi-trash"></span>
        </button>
      </div>
      <hr />
      <h2>Cards</h2>
      <CardList currentDeck={currentDeck} cards={cards} cardsLoaded={cardsLoaded} />
    </div>
  );
}

export default ViewDeck;
