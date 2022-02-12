import React from "react";
import { useState } from "react";
import List from "./List";

const ListContainer = (props) => {

  const [page, setPage] = useState(1);

  let maxPage;
  if (props.show === "character") maxPage = 42;
  if (props.show === "location") maxPage = 7;

  return (
  <>
    <div className="pagination">
      <List show={props.show} page={page}/>
      </div>
      <div className="pagBtnDiv">
      {[...Array(maxPage).keys()].map((item) => <button className="paginationBtn" key={item} onClick={() => setPage(item + 1)} disabled={(page === (item + 1))}>{item + 1}</button>)}
    </div>
  </>
);
};

export default ListContainer;
