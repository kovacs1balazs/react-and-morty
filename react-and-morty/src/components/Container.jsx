import React from "react";
import { useState } from "react";
import Description from "./Description";
import ListContainer from "./ListContainer";

const Container = () => {

  const [show, setShow] = useState("description");
  const [init, setInit] = useState(false);

  return ( <>
    <div className="btnDiv">
      <button id="character" onClick={() => setShow("character")}>Characters</button>
      <button id="location" onClick={() => setShow("location")}>Locations</button>
    </div>
    <div className="container">
      {(show === "description") ? <Description/> : <ListContainer show={show} init={init}/>}
    </div>
    </>
  );
};

export default Container;