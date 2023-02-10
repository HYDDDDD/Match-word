import React from "react";
<<<<<<< HEAD
import Option from "../Category/Option";
=======
>>>>>>> bf899e5a0610e8b8957c9352583c515921366d3a
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