import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import CardForm from "./CardFormBoilerPlate";
import submitEditCardHandler from "./submitEditCardHandler";


function EditCardForm({ card, deck, routeMatch, setReloadDeck }) {
    const history = useHistory()

  const [formData, setFormData] = useState(null);
  //   console.log("card in form edit is", card);

  useEffect(() => {
    if (card) {
      const { front, back, id, deckId } = card;
      setFormData({ front, back, id, deckId });
    }
  }, [card]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const submitHandler = (event) => {
    submitEditCardHandler(event, formData, deck, setReloadDeck);
    history.push(`/decks/${routeMatch.params.deckId}`)
  };

  return (
    <CardForm submitHandler={submitHandler} handleChange={handleChange} routeMatch={routeMatch} formData={formData} deck={deck} subtitle={"Edit Card"} />
  );
}

export default EditCardForm;
