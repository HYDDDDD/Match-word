import React from "react";
import Username from "../Category/Username";
import ShowVocab from "./ShowVocab";
import "./Prepare.css"

function Prepare({ currentUser, selectedTreasury }) {

  return (
    <div id="picNo2">
      <div>you are hoho</div>
      <Username currentUser={currentUser} />
      <ShowVocab selectedTreasury={selectedTreasury} />
    </div>
  );
}

export default Prepare;
