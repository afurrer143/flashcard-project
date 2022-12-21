import React from "react";
import { Link } from "react-router-dom";

function CardForm({ submitHandler, handleChange, routeMatch, formData, deck, subtitle, newCardInfo }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        {newCardInfo}
        <h2><span>"{deck?.name}" </span>{subtitle}</h2>
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

export default CardForm;
