import React from "react";
import Username from "../Category/Username";
import Vocab from "./Vocab";
import Menu from "../Menu/Menu";
import "./EditVocab.css";

function EditVocabulary({ currentUser, selectedTreasury }) {
  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="EV-details">
        <p>Edit Vocabulary</p>
      </div>
      <div className="Menu-EV">
        <Menu/>
      </div>
      <Vocab selectedTreasury={selectedTreasury} />
    </div>
  );
}

export default EditVocabulary;