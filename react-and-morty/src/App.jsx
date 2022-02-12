import React from "react";
import "./App.css";
import "./contentCard.css";
import logo from "./images/landingLogo.jpg";
import Container from "./components/Container";

function App() {

  return (<>
    <div className="logoDiv">
      <img style={{height: "600px"}} className="landingLogo" alt="" src={logo}/>
    </div>
      <Container/>
    </>
  )};
/*
      Container (show = (descr, char, loc))
        <button></button>
        <button></button>

      ? Description
      ? ListContainer (pageNum = szám)
        ? CharacterList
            AdatBekérés
            CharacterSmallCard
            DetailedCard
              ? CharacterCardContent
              ? LocationsCardContent
            DetailedCard
          CharacterList
        ? LocationList
            AdatBekérés
            LocationSmallCard
            DetailedCard
              ? CharacterCardContent
              ? LocationsCardContent
            DetailedCard
          LocationList
        Pager
        ListContainer
      Container
 */

export default App;
