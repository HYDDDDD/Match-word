import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import Username from "../Category/Username";
import Po from "../../picture/no2.png";
import ShowVocab from "./ShowVocab";

function Prepare({ currentUser, selectedTreasury }) {

  return (
    <div>
      <div>
        <img width="1490px" height="735px" src={Po} alt="" />
      </div>
      <Username currentUser={currentUser} />
      <ShowVocab selectedTreasury={selectedTreasury} />
    </div>
  );
}

export default Prepare;
