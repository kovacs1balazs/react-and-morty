import React from "react";
import { useCharacters } from "../api/useData";
import CharacterSmallCard from "./CharacterSmallCard";

const CharacterList = (props) => {
  
  const characters = useCharacters(props.page);
  console.log(characters);
  let isLoaded = characters.hasOwnProperty("results");

  return (
    <div className= "characterListDiv" >
      {isLoaded && characters.results.map((item) => <CharacterSmallCard key={item.id} character={item}/>)}
    </div>
  );
};

export default CharacterList;
