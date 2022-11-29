import { deleteDeck } from "../utils/api";

function DeleteDeckHandler(Id, setDecks, allDecks) {
  const abortController = new AbortController();
  // console.log("DELTETLETLEDLEYE");
    deleteDeck(Id, abortController.signal);
    setDecks(allDecks); //Set decks here forces the useEffect that loads the decks to rerun...i am a bit worried about the AllDecks here since technically that is the decks before the update. But should not matter if I do not use that Decks state
}

export default DeleteDeckHandler;
