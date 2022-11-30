import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import submitEditDeckHandler from "./submitEditDeckHandler";
import { readDeck } from "../utils/api";

function EditDeck({currentDeck, setDecks }) {

    const history = useHistory()

      const [formData, setFormData] = useState(null);

      const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
          ...formData,
          [target.name]: value,
        });
      };

    //   useEffect(() => {
    //     setFormData({
    //         ...formData,
    //         name: currentDeck.name,
    //         description: currentDeck.description,
    //         id: currentDeck.id
    //       });
    //   }, [cardsLoaded, currentDeck])

      useEffect(() => {
        async function loadDeck () {
            try {
                let response = await readDeck(currentDeck.id)
                const { name, description, id} = response
                setFormData({ name, description, id })
            } catch (error) {
                console.log(error.message);
            }
        }
        if (currentDeck?.id) {
            loadDeck()
        }
      }, [currentDeck])


      const submitHandler = (event) => {
        submitEditDeckHandler(event, formData, history, currentDeck, setDecks)
        history.push(`/decks/${currentDeck.id}`)
      }



  if (!formData) {
    return <p>Loading Current Deck Information</p>;
  } else {
    return (
      <form 
      onSubmit={submitHandler}
      >
        <div className="form-group">
          <h2>Edit Deck</h2>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name || ""}
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
            onChange={handleChange}
            value={formData.description || ""}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-primary py-2 px-0 mx-3 col-1">
          Submit
        </button>
        <Link
          to={`/decks/${currentDeck.id}/`}
          type="button"
          className="btn-secondary py-2 px-0 mx-3 col-1 text-center"
        >
          Cancel
        </Link>
      </form>
    );
  }
}

export default EditDeck;
