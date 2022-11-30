import { updateDeck } from "../utils/api";

async function submitEditDeckHandler (event, formData, history, currentDeck, setDecks) {
    event.preventDefault();
    const abortController = new AbortController();
    // console.log(currentDeck);
    formData.name = formData.name.trim()
    formData.description = formData.description.trim()
    console.log(formData)

    await updateDeck(formData, abortController.signal)
    setDecks(formData)
    
    return () => abortController.abort()
}

export default submitEditDeckHandler
