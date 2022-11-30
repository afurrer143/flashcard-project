import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import ListAllDecks from "../HomePage/ListAllDecks";
import CreateDeckButton from "../HomePage/CreateDeckButton";
import CreateNewDeck from "../NewDeck";
import DeckView from "../DeckView";
import NavigationBar from "./NavigationBar";

import { listDecks } from "../utils/api";

// Need a component for a "creat deck" button, should link to a create card page
// Need to make component to list all decks (with the number of cards, a view button, and a study button on them)

function Layout() {
  const [allDecks, setAllDecks] = useState([]);
  const [allDecksLoaded, setAllDecksLoaded] = useState(false)
  const [decks, setDecks] = useState([]); //not really used much. Used in delete handler to then force the useEffect to rerun with the new deck list (guess create deck will do a similar thing)
  

  // loads deck from the database
  useEffect(() => {
    setAllDecks([]);
    async function loadDecks() {
      try {
        const allDecks = await listDecks();
        setAllDecks(allDecks);
        setAllDecksLoaded(true)
      } catch (error) {
        throw error;
      }
    }
    loadDecks();
  }, [decks]);
  // console.log(allDecks);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          {/* Homepage */}
          <CreateDeckButton />
          <div className="container">
            <ListAllDecks allDecks={allDecks} setDecks={setDecks} />
          </div>
        </Route>

        {/* New Deck page */}
        <Route path={"/decks/new"}>
          <div className="container">
            <NavigationBar NewDeck={true}  />
            <CreateNewDeck  allDecks={allDecks} setDecks={setDecks} />
          </div>
        </Route>

        {/* View decks and study page */}
        <Route path={"/decks/:deckId"}>
          <div className="container">
            <DeckView DeckView={true} allDecks={allDecks} setDecks={setDecks} decks={decks} allDecksLoaded={allDecksLoaded}/>
          </div>
        </Route>

        <Route>
          {/* defaulted to when no other route found */}
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
