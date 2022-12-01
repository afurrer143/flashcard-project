import { updateCard } from "../utils/api";

async function submitEditCardHandler(event, formData, deck, setReloadDeck) {
    event.preventDefault();
    console.log("DECK IS", deck);
    
    const abortController = new AbortController();
    formData.front = formData.front.trim()
    formData.back = formData.back.trim()
    console.log("form data is", formData);

    let response = await updateCard(formData, abortController.signal)
    // need to update the cards now
    setReloadDeck(response)

    return () => abortController.abort()
}

export default submitEditCardHandler