import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <h2>Edit Card</h2>
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
          value={formData?.front || ""}
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
          value={formData?.back || ""}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary py-2 px-0 mx-3 col-1">
        Submit
      </button>
      <Link
        to={`/decks/${routeMatch.params.deckId}`}
        type="button"
        className=" btn btn-secondary py-2 px-0 mx-3 col-1 text-center"
      >
        Cancel
      </Link>
    </form>
  );
}

export default EditCardForm;
