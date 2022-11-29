import { Link, useHistory } from "react-router-dom";

import CardList from "./CardList";
import deleteDeckHandler from "../HomePage/deleteDeckHandler";

function ViewDeck({ currentDeck, cards, setDecks, allDecks, cardsLoaded, error, routeMatch }) {
  let history = useHistory()

  const deleteClick = () => {
    if (window.confirm("Do you really wish to delete this deck?")) {
      deleteDeckHandler(currentDeck.id, setDecks, allDecks, routeMatch)
      history.push("/")
    }
  }

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
          to={`${routeMatch.url}/cards/new`}
          type="button"
          className="btn btn-primary mx-2 p-0 py-2 col-3"
        >
          <span className="oi oi-plus"></span> Add Cards
        </Link>
        <button
          type="button"
          className="btn btn-danger ml-2 p-0 py-2 float-right col-1"
          onClick={() => deleteClick()}
        >
          <span className="oi oi-trash"></span>
        </button>
      </div>
      <hr />
      <h2>Cards</h2>
      <CardList currentDeck={currentDeck} cards={cards} cardsLoaded={cardsLoaded} routeMatch={routeMatch}/>
    </div>
  );
}

export default ViewDeck;
