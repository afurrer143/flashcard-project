import { Link } from "react-router-dom";
import deleteDeckHandler from "./deleteDeckHandler";
// CALLED FROM LAYOUT/INDEX.JS

function ListAllDecks({ allDecks, setDecks}) {
  console.log("the current AllDecks array is:", allDecks);
  //0 {id: 1, name: 'Rendering in React', description: "React's component structure allows for quickly bui…web application that relies on DOM manipulation. ", cards: Array(4)}
  //1 {id: 2, name: 'React Router', description: 'React Router is a collection of navigational compo…that compose declaratively with your application.', cards: Array(2)}

  // while initially fetching the decks show loading (note this would also show when there are no decks. . .  should fix eventually ((I could just swap this to the not found function)))
  if (allDecks.length === 0) {
    return <p>Loading . . .</p>;
  } else {
    //when allDecks length is anything but 0, do this
    return (
      <div className="row">
        {allDecks.map((currentDeck, i) => {
          return (
            <div className="col-12 border py-2 my-2" key={i}>
              <div className="row">
                <h3 className="col-10">{currentDeck.name}</h3>
                <p className="col-2 text-right">
                  {currentDeck.cards.length} cards
                </p>
              </div>
              <p>{currentDeck.description}</p>
              <div>
                <Link to={`/decks/${currentDeck.id}`} type="button" className="btn btn-primary mx-1">
                <span className="oi oi-eye"></span> View
                </Link>
                <Link to={`/decks/${currentDeck.id}/study`} type="button" className="btn btn-secondary mx-1">
                <span className="oi oi-book"></span> Study
                </Link>
                <button type="button" className="btn btn-danger mx-1 float-right" onClick={() => deleteDeckHandler(currentDeck.id, setDecks, allDecks)}>
                <span className="oi oi-trash"></span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListAllDecks;
