import { Route, useRouteMatch } from "react-router-dom";

import ViewDeck from "./ViewDeck";
import NavigationBar from "../Layout/NavigationBar";

function DeckView({ allDecks }) {
  const routeMatch = useRouteMatch();
  // console.log(routeMatch);

  return (
    <>
      {/* For the view page */}
      <Route exact path={routeMatch.path}>
        <NavigationBar DeckView={true} allDecks={allDecks} />
        <ViewDeck />
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
