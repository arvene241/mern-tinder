import React from "react";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <TinderCards />
      <SwipeButtons />
    </React.Fragment>
  );
}

export default App;
