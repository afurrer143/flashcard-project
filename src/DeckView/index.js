import { Route, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";

import { readDeck } from "../utils/api";
import ViewDeck from "./ViewDeck";
import NavigationBar from "../Layout/NavigationBar";

function DeckView({ allDecks, setDecks, decks, allDecksLoaded }) {
  const routeMatch = useRouteMatch();
  // console.log(routeMatch);

  const [cards, setCards] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [cardsLoaded, setCardsLoaded] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!allDecksLoaded) {
      // just parking this here trying to limit all my API calls
    }
    setCards([]);
    const abortController = new AbortController();
    async function loadCards() {
      try {
        let deckID = routeMatch.params.deckId;
        const specificDeck = await readDeck(deckID, abortController.signal)
        setCurrentDeck(specificDeck)
        setCards(specificDeck.cards)
        setCardsLoaded(true)
      } catch (err) {
        // so if i throw an error, it crashes. But that works...ish
        setError(err)
      }
    }
    loadCards();
    // console.log("CARDS IS", cards);
    return () => abortController.abort();
  }, [allDecksLoaded, routeMatch]);
  

  return (
    <>
      {/* For the view page */}
      <Route exact path={routeMatch.path}>
        <NavigationBar DeckView={true} allDecks={allDecks} />
        <ViewDeck currentDeck={currentDeck} cards={cards} setDecks={setDecks} allDecks={allDecks} cardsLoaded={cardsLoaded} error={error} routeMatch={routeMatch}/>
      </Route>
      {/* for the study page */}
      <Route path={`${routeMatch.path}/study`}>
        <NavigationBar StudyView={true} allDecks={allDecks} />
        <p>Studying</p>
      </Route>
    </>
  );
}

export default DeckView;
