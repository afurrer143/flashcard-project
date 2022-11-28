
import { deleteDeck } from "../utils/api";

function deleteDeckHandler (deckId, setDecks, allDecks) {
    const abortController = new AbortController();
    console.log("DELTETLETLEDLEYE")
    if (window.confirm("Do you really wish to delete this deck?")) {
        deleteDeck(deckId, abortController.signal)
        setDecks(allDecks) //Set decks here forces the useEffect that loads the decks to rerun...i am a bit worried about the AllDecks here since technically that is the decks before the update. But should not matter if I do not use that Decks state
      }
}

export default deleteDeckHandler