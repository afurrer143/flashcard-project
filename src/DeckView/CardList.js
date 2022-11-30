import { Link, useHistory } from "react-router-dom";

import DeleteCard from "../Cards/DeleteCard";
// realistically, i should have put this in the cards folder

function CardList({ cards, cardsLoaded, routeMatch, setReloadDeck, setDecks }) {
  const history = useHistory();

  function deleteCardHandler(currentCardId, cardFront = "") {
    // console.log(currentCardId);
    let shortenedFront = "the";
    if (cardFront) {
      shortenedFront = ` this "${cardFront.slice(0, 15)}..."`;
    }
    if (
      window.confirm(`Are you sure you want to delete ${shortenedFront} card?`)
    ) {
      DeleteCard(currentCardId, cards, history, setReloadDeck, setDecks);
    }
  }

  if (!cardsLoaded || cards?.length === 0) {
    return (
      <div>
        <hr />
        <h4>No Cards Available</h4>
        <p>Would you like to add some?</p>
        <Link
          to={`${routeMatch.url}/cards/new`}
          type="button"
          className="btn btn-primary mx-2 p-0 py-2 col-12"
        >
          <span className="oi oi-plus"></span> Add Cards
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        {cards?.map((currentCard, i) => {
          // console.log("The current card in cards.map is", currentCard);
          return (
            <div className="border py-5 my-3" key={i}>
              <div className="d-flex flex-row justify-content-between">
                <p className="col-6">{currentCard.front}</p>
                <p className="col-6">{currentCard.back}</p>
              </div>
              <div>
                {/* delete single card button */}
                <button
                  type="button"
                  className="btn btn-danger float-right py-2 px-0 mx-3 col-1"
                  onClick={() =>
                    deleteCardHandler(currentCard.id, currentCard.front)
                  }
                >
                  <span className="oi oi-trash"></span>
                </button>
                {/* edit card button */}
                <Link to={`${routeMatch.url}/cards/${i + 1}/edit`}
                  type="button"
                  className="btn btn-secondary float-right text-center py-2 px-0 mx-3 col-2"
                >
                  <span className="oi oi-pencil"></span> Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );

    // need a return here later gater
    // console.log("CARD LIST ~~~~~~~~~~", cardList);
  }
}

export default CardList;
