import React from "react";
import { useState } from "react";

const CharacterSmallCard = (props) => {

  const [isShowable, setIsShowable] = useState(false);

  // Big Character Card
  const contentCard = (
    <div className="contentContainer">
      <div className="contentCard">
        <img className="charContentImage" src={props.character.image}/>
        <h3>{props.character.name}</h3>
        <hr/>
        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.status}</p>
        <button onClick={hideContentCard}>Close</button>
      </div>
    </div>
  );

  function showContentCard() {
    setIsShowable(true)
  }
  
  function hideContentCard() {
    setIsShowable(false)
  }

  // Small Character Card
  return (
    <div className="smallCardContainer" key={props.character.id} onClick={isShowable ? null : showContentCard}>
      <img className="charImage" src={props.character.image}/>
      <h3>{props.character.name}</h3>
      <p className="smallSpecies">{props.character.species}</p>
      {isShowable ? contentCard : ""}

    </div>
  );
};

export default CharacterSmallCard;
