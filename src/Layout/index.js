import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";

// Need to make 

function Layout() {
  console.log(listDecks()); 
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
