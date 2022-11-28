import { useRouteMatch, Link } from "react-router-dom";

// so for study view and New Deck view I just change the title and return a boiler plate thing
// ...Stydy view I just return a slightly modified boiler plate nav bar with a 2nd link added
// Later when I need to format my navigation bar more I can call it with optional params like link1 or 2 and add them to it
function NavigationBar({
  allDecks = [],
  DeckView = false,
  NewDeck = false,
  StudyView = false,
}) {
  const routeMatch = useRouteMatch();
  console.log("Route Match is", routeMatch);
  console.log("All decks is", allDecks);
  

  let title = "loading . . .";

  // HELPER FUNCTION TO CHECK DECKS WORK AND SET THE TITLE
//   function checkDecksValidAndSetTitle(allDecks) {
//     if (allDecks.length === 0) {
//       // i cant get ! to work...so yeah this is here
//     } else {
//     //   Validate the params deck ID is valid
//       if (routeMatch.params.deckId - 1 < allDecks.length && routeMatch.params.deckId - 1 >=0 ) {
//         title = allDecks[routeMatch.params.deckId - 1].name;
//       } else {
//         title = `Deck ${routeMatch.params.deckId}`;
//       }
//     }
//   }

// TESTING NEW CHECK DECK VALIDATE CAUSE IF I DELETE A DECK IT HECKS THAT ONE UP
// Need to use .find on allDecks array and find a allDecks.id matches the :deckId in URL
function checkDecksValidAndSetTitle(allDecks) {
    if (allDecks.length != 0) { //if all decks length does NOt equal 0

    }
}

  //   NAV BAR IN DECK VIEW (NEEDS A VARIABLE FOR THE TITLE)
  if (DeckView) {
    // so if you refresh the page on deck view specifically, allDecks is not defined at the time this code runs and it will error out and crash on trying to get a .name of the undefined allDecks. So added a basic if statement to check if allDecks is loaded
    checkDecksValidAndSetTitle(allDecks);
    // NAV BAR IN NEW DECK CREATION (doesnt need any variables tho)
  } else if (NewDeck) {
    title = "Create Deck";

    // NAV BAR IN STUDY PAGE...i am just gonna return here with a 2nd link added :skull:
  } else if (StudyView) {
    checkDecksValidAndSetTitle(allDecks)
    
    return (
      <div className="bg-light mb-4 py-3">
        <Link to="/" className="text-primary">
          Home /
        </Link>
        <Link to={`/decks/${routeMatch.params.deckId}`} className="text-primary">
          {title} /
        </Link>
        <Link to={`${routeMatch.url}`} className="text-secondary">Study</Link>
      </div>
    );
  }

  return (
    <div className="bg-light mb-4 py-3">
      <Link to="/" className="text-primary">
        Home /
      </Link>
      <Link to={routeMatch.url} className="text-secondary">
        {title}
      </Link>
    </div>
  );
}

export default NavigationBar;