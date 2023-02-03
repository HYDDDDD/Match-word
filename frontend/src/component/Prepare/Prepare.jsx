import React from "react";
import Username from "../Category/Username";
import Po from "../../Picture/no2.png";
import ShowVocab from "./ShowVocab";

function Prepare({ currentUser, seletedTreasury }) {
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
