import React from "react";
import Username from "../Category/Username";
import Po from "../../Picture/no2.png";
import ShowVocab from "./ShowVocab";

<<<<<<< HEAD
function Prepare({ currentUser, seletedTreasury }) {
=======
function Prepare({ currentUser, selectedTreasury }) {

>>>>>>> f6a134eccf02194e8422f1f996b72eadcbfc3b51
  return (
    <div>
      <div>
        <img width="1490px" height="735px" src={Po} alt="" />
      </div>
      <Username currentUser={currentUser} />
      <ShowVocab seletedTreasury={seletedTreasury} />
    </div>
  );
}

export default Prepare;
