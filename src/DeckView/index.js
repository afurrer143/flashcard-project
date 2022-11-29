import { Route, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";

import ViewDeck from "./ViewDeck";
import NavigationBar from "../Layout/NavigationBar";

function DeckView({ allDecks }) {
  const routeMatch = useRouteMatch();
  // console.log(routeMatch);

  const [currentDeck, setCurrentDeck] = useState([]);

//   changes current Deck any time alldecks, or routeMatch changes
  useEffect(() => {
      let MatchingDeck = allDecks.find((currentDeck) => {
        return Number(currentDeck.id) === Number(routeMatch.params.deckId);
      })   
      setCurrentDeck(MatchingDeck)
    }, [allDecks, routeMatch]);
    
    
  return (
    <>
      {/* For the view page */}
      <Route exact path={routeMatch.path}>
        <NavigationBar DeckView={true} allDecks={allDecks} />
        <ViewDeck currentDeck={currentDeck} />
      </Route>
      {/* for the study page */}
      <Route path={`${routeMatch.path}/study`}>
        <NavigationBar StudyView={true} allDecks={allDecks} />
        <p>Studying</p>
      </Route>
    </>
  );
}

export default DeckView;
