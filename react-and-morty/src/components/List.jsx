import React from "react";
import { useState } from "react";
import CharacterList from "./CharacterList";
import LocationList from "./LocationList";

const List = (props) => {
  
  return (
    <>
      {props.show === "character" ? <CharacterList page={props.page}/> : ""}
      {props.show === "location" ? <LocationList page={props.page}/> : ""}
    </>
  );
};

export default List;
