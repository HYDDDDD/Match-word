import React from "react";
import Username from "../Category/Username";
import ShowVocab from "./ShowVocab";
import "./Prepare.css";
import Menu from "../Menu/Menu";

function Prepare({ currentUser, selectedTreasury }) {
  // console.log(selectedTreasury);
  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="prepare-details">
        <p>Prepare</p>
      </div>
      <div className="Menu-P">
        <Menu/>
      </div>
      <ShowVocab selectedTreasury={selectedTreasury} />
    </div>
  );
}

export default Prepare;
