import { Link } from "react-router-dom";
// CALLED FROM LAYOUT/INDEX.JS

function CreateDeckButton() {
    return (
        <div className="container p-0 my-2">
            <Link to={"/decks/new/"} type="button" className="btn btn-secondary m-0"><span className="oi oi-plus"></span> Create Deck</Link>
        </div>
    )
}

export default CreateDeckButton