import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { readDeck, readCard } from "../utils/api";
import EditCardForm from "./EditCardForm";

// so i need to check if the deck in the url is valid and so is the card...maybe
// So i have "card id" in the url, but its actually from the cardList.js mapping, which is its own unique id, not in the json file
// the parama Card Id is just the index of cards array + 1 (so it starts at 1 not 0)
// so i could get the cards array from an Api call and do like cards[params.cardId - 1]

function EditCard({setReloadDeck}) {
  const routeMatch = useRouteMatch();

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);

  // get the deck, and then get single card
  //   THIS IS TERRIBLE AND I HATE IT
//   IT DOES SO MANY API CALLS
  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    let deckID = routeMatch.params.deckId;
    try {
      readDeck(deckID, abortController.signal).then((items) => {
        if (mounted) {
          setDeck(items);
        }
      });
      return () => (mounted = false);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (deck?.cards) {
        let mounted = true;
        const abortController = new AbortController();
        try {
          let cardIndex = routeMatch.params.cardId - 1;
          let card = deck.cards[cardIndex];
          let cardId = card?.id;
          readCard(cardId, abortController.signal).then((items) => {
            if (mounted) {
              setCard(items);
            }
          });
          return () => (mounted = false);
        } catch (err) {
          setError(err);
        }
    }
  }, [deck]);

  //   console.log("deck is", deck);
   console.log("card is", card);

  if (error) {
    return error.message;
  }

  if (card?.front && card?.id) {
      return (
        <EditCardForm deck={deck} setDeck={setDeck} card={card} routeMatch={routeMatch} setReloadDeck={setReloadDeck} />
      )
  } else {
    return <p>Loading . . .</p>;
  }
}

export default EditCard;
