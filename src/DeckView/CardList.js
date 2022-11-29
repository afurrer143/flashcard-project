function CardList({ cards, cardsLoaded }) {
  if (!cardsLoaded || cards?.length === 0) {
    return <p>Loading info</p>;
  } else {
    return (
      <ul>
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
      </ul>
    );

    // need a return here later gater
    // console.log("CARD LIST ~~~~~~~~~~", cardList);
  }
}

export default CardList;
