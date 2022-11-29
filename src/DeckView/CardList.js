import { Link, useRouteMatch } from "react-router-dom";


function CardList({ cards, cardsLoaded, routeMatch }) {
  if (!cardsLoaded || cards?.length === 0) {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
        {cards?.map((currentCard, i) => {
          // console.log("The current card in cards.map is", currentCard);
          return (
            <div className="border py-5" key={i}>
              <div className="d-flex flex-row justify-content-between">
                <p className="col-6">{currentCard.front}</p>
                <p className="col-6">{currentCard.back}</p>
              </div>
              <button
                type="button"
                className="btn-danger float-right py-2 mx-3 col-1"
              >
                <span className="oi oi-trash"></span>
              </button>
              <button
                type="button"
                className="btn-secondary float-right p-2 mx-3 col-2"
              >
                <span className="oi oi-pencil"></span> Edit
              </button>
            </div>
          );
        })}
      </>
    );

    // need a return here later gater
    // console.log("CARD LIST ~~~~~~~~~~", cardList);
  }
}

export default CardList;
