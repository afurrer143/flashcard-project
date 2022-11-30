import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

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

  //   need to finish
  const submitHandler = (event) => {
    newCardSubmission(event, formData, history, currentDeck, setNewCard, setDecks);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <h2><span>{currentDeck?.name}</span>: Add Card</h2>
        {newCardInfo}
        <label htmlFor="front">Front</label>
        <br />
        <textarea
          type="text"
          id="front"
          name="front"
          required
          rows={2}
          placeholder="Front side of card"
          onChange={handleChange}
          value={formData.front}
          className="form-control"
        />
        <label htmlFor="back">Back</label>
        <br />
        <textarea
          type="text"
          id="back"
          name="back"
          required
          rows={2}
          placeholder="Back side of card"
          onChange={handleChange}
          value={formData.back}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary py-2 px-0 mx-3 col-1">
        Submit
      </button>
      <Link
        to={`/decks/${routeMatch.params.deckId}`}
        type="button"
        className="btn btn-secondary py-2 px-0 mx-3 col-1 text-center"
      >
        Done
      </Link>
    </form>
  );
}
export default NewCard;
