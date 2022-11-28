import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="jumbotron bg-dark">
        <Link to="/" className="text-decoration-none">
        <div className="container text-white">
          <h1 className="display-4">Flashcard-o-matic</h1>
          <p className="lead">Discover The Flashcard Difference.</p>
        </div>
      </Link>
      </header>
  );
}

export default Header;
