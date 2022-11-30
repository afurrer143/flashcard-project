import { deleteCard } from "../utils/api";

// so this is called in the DeckView folder from CardList.js cause i hecked up

// so i do need a way to relod the cards after a delete. A history.push may?
function DeleteCard (currentCardId, cards, history, setReloadDeck, setDecks) {
    const abortController = new AbortController();
    console.log(cards);
    let deletedCard = deleteCard(currentCardId, abortController.signal)
    console.log("deleted a card", deletedCard);
    setReloadDeck(cards)
    setDecks(cards)
    return () => abortController.abort();
}

export default DeleteCard