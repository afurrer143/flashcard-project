import { Route, Switch, useRouteMatch } from "react-router-dom";

import NewCard from "./NewCard";
import EditCard from "./EditCard";
import NavigationBar from "../Layout/NavigationBar";
import NotFound from "../Layout/NotFound";

function IndividualCard({currentDeck, setReloadDeck, setDecks}) {
  const routeMatch = useRouteMatch();
//   console.log("Why so many", routeMatch);
  return (
    <div>
      <Switch>
        {/* PATH IS "/decks/:deckId/cards" */}
        {/* New Card */}
        <Route exact path={`${routeMatch.path}/new`}>
          <NavigationBar newCard={true} currentDeck={currentDeck} />
          <NewCard currentDeck={currentDeck} setDecks={setDecks} />
        </Route>

        {/* edit card */}
        <Route path={`${routeMatch.path}/:cardId/edit`}>
          <NavigationBar EditCardView={true} currentDeck={currentDeck}  />
          <EditCard setReloadDeck={setReloadDeck} />
        </Route>

        <Route>
            <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default IndividualCard;
