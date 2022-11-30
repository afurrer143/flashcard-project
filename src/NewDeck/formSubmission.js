import { createDeck } from "../utils/api";

async function formSubmission(event, formData, history, setDecks) {
  event.preventDefault();
  const abortController = new AbortController();
  console.log("formData is", formData);
  formData.name = formData.name.trim()
  formData.description = formData.description.trim()
  
  let newDeck = await createDeck(formData, abortController.signal);
//   console.log("~~~~NEW DECK IS~~~~", newDeck);
  
  history.push(`/decks/${newDeck.id}`); // Needs to take user to the deck page for the deck they just made
  setDecks(formData) //Just update the deck states, which forces the useEffect in layout Index.js to update all decks
}

export default formSubmission;
