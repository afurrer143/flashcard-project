import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import CardForm from "./CardFormBoilerPlate";
import newCardSubmission from "./NewCardSubmission";

function NewCard({ currentDeck, setDecks }) {
  const history = useHistory();
  const routeMatch = useRouteMatch()

  const initialFormState = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [newCard, setNewCard] = useState(null);
  const [newCardInfo, setNewCardInfo] = useState("");

  // the page reloads, getting rid of this
  useEffect(() => {
    setNewCardInfo(null)
    if (newCard) {
      setNewCardInfo(
        <h4 className="text-info">
          Added a new card called "<span className="text-success">{newCard?.front}</span>"
        </h4>
      );
    }
  }, [newCard]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const submitHandler = (event) => {
    newCardSubmission(event, formData, history, currentDeck, setNewCard, setDecks);
    setFormData({ ...initialFormState });
  };

  return (
    <CardForm submitHandler={submitHandler} handleChange={handleChange} routeMatch={routeMatch} formData={formData} deck={currentDeck} subtitle={"New Card"} newCardInfo={newCardInfo}/>
  );
}
export default NewCard;
