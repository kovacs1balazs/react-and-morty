import React from "react";
import { useLocations } from "../api/useData";
import LocationSmallCard from "./LocationSmallCard";

const LocationList = (props) => {
  
  const locations = useLocations(props.page);
  console.log(locations);
  let isLoaded = locations.hasOwnProperty("results");

  return (
    <div className="locationListDiv">
      {isLoaded && locations.results.map((item) => <LocationSmallCard key={item.id} location={item}/>)}
    </div>
  );
};

export default LocationList;
