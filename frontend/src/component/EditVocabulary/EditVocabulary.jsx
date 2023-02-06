import React from "react";
import Option from "../Category/Option";
import Username from "../Category/Username";
import Vocab from "./Vocab";

function EditVocabulary({ currentUser, selectedTreasury }) {
  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="category-details">
        <p>Edit Vocabulary</p>
      </div>
      <Vocab selectedTreasury={selectedTreasury} />
    </div>
  );
}

export default EditVocabulary;