import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import formSubmission from "./formSubmission";

function CreateNewDeck({setDecks, allDecks}) {
  const history = useHistory();

  const initialFormState = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  //   console.log(formData);

  const submitHandler = (event) => {
    formSubmission(event, formData, history, setDecks);
    
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <h2>Create Deck</h2>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter a name"
          onChange={handleChange}
          value={formData.name}
          required
          className="form-control"
        ></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          type="text"
          id="description"
          name="description"
          rows={3}
          placeholder="Enter a description"
          onChange={handleChange}
          value={formData.description}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-primary p-2 mx-3 col-1">
        Submit
      </button>
      <Link
        to={"/"}
        type="button"
        className="btn-secondary p-2 mx-3 col-1 text-center"
      >
        Cancel
      </Link>
    </form>
  );
}

export default CreateNewDeck;
