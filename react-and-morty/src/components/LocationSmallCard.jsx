import React from "react";
import { useState } from "react";

const LocationSmallCard = (props) => {

  const [isShowable, setIsShowable] = useState(false);

  // Big Card
  const contentCard = (
    <div className="contentContainer">
      <div className="contentCard">
        <h3>{props.location.name}</h3>
        <p>{props.location.type}</p>
        <p>{props.location.dimension}</p>
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

  // Small Card
  return (
    <div className="smallCardContainerLoc" key={props.location.id} onClick={isShowable ? null : showContentCard}>
      <h3>{props.location.name}</h3>
      <p>{props.location.type}</p>
      {isShowable ? contentCard : ""}

    </div>
  );
};

export default LocationSmallCard;
