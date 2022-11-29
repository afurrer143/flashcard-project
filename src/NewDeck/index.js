import { Link } from "react-router-dom";

import formSubmission from "./formSubmission";

const submitHandler = (event) => {
    formSubmission(event)
}

function CreateNewDeck() {


  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <h2>Create Deck</h2>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          htmlFor="name"
          id="name"
          placeholder="Enter a name"
          className="form-control"
        ></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="Description"
          name="Description"
          rows={3}
          placeholder="Enter a description"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-primary p-2 mx-3 col-1">Submit</button>
      <Link to={"/"} type="button" className="btn-secondary p-2 mx-3 col-1 text-center">Cancel</Link>
    </form>
  );
}

export default CreateNewDeck;
