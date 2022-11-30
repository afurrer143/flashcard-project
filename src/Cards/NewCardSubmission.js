import { createCard } from "../utils/api"

async function newCardSubmission (event, formData, history, currentDeck, setNewCard, setDecks) {
    event.preventDefault()
    const abortController = new AbortController();
    formData.front = formData.front.trim()
    formData.back = formData.back.trim()
    let id = currentDeck?.id
    let newlyMadeCard = await createCard(id, formData, abortController.signal)
    setNewCard(newlyMadeCard)
    setDecks(newlyMadeCard)
    console.log(formData);
}

export default newCardSubmission