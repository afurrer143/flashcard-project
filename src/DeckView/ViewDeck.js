import { Link, useHistory } from "react-router-dom";

import CardList from "./CardList";
import deleteDeckHandler from "../HomePage/deleteDeckHandler";

function ViewDeck({
  currentDeck,
  cards,
  setDecks,
  allDecks,
  cardsLoaded,
  setReloadDeck,
  error,
  routeMatch,
}) {
  let history = useHistory();

  const deleteClick = () => {
    if (window.confirm("Do you really wish to delete this deck?")) {
      deleteDeckHandler(currentDeck.id, setDecks, allDecks, routeMatch);
      history.push("/");
    }
  };

  if (error) {
    return error.message;
  }
  // console.log("CURENT DECK",currentDeck);

  let warningMessage = null;
  // cant add `${} to JSX so i have default class for the study button here, if current deck length is less than 3. I just change the BG color`
  let warningClass = "btn btn-primary mx-2 p-0 py-2 col-2";
  // when the current deck legnth is less than 3, show a small warning paragraph, and change study button BG to color to warning
  if (currentDeck?.cards?.length < 3) {
    warningMessage = (
      <p>
        <strong>
          Warning: To study these cards you must have at least 3 cards
        </strong>
      </p>
    );
    warningClass = "btn btn-warning mx-2 p-0 py-2 col-2";
  }

  return (
    <div>
      <h3> {currentDeck?.name} </h3>
      <p> {currentDeck?.description} </p>
      {warningMessage}
      <div>
        <Link
          to={`/decks/${currentDeck.id}/edit`}
          type="button"
          className="btn btn-secondary mr-2 p-0 py-2 col-2"
        >
          <span className="oi oi-pencil"></span> Edit 
        </Link>
        <Link
          to={`/decks/${currentDeck.id}/study`}
          type="button"
          className={warningClass}
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
      <CardList
        currentDeck={currentDeck}
        cards={cards}
        cardsLoaded={cardsLoaded}
        setDecks={setDecks}
        setReloadDeck={setReloadDeck}
        routeMatch={routeMatch}
      />
    </div>
  );
}

export default ViewDeck;
