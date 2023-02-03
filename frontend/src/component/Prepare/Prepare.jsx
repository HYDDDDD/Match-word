<<<<<<< HEAD
import React from "react";
import Username from "../Category/Username";
import Po from "../../Picture/no2.png";
import ShowVocab from "./ShowVocab";

function Prepare({ currentUser, seletedTreasury }) {
=======
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import Username from "../Category/Username";
import Po from "../../picture/no2.png";
import ShowVocab from "./ShowVocab";

function Prepare({ currentUser, selectedTreasury }) {
  const [dataTreasury, setDataTreasury] = useState([]);
  const [setSaveData, clearLocalStorage] = useLocalStorage("Selected Treasury");

  const getLocalStorage = async () => {
    try {
      const local = await localStorage.getItem("Selected Treasury");

      if (local) {
        await setDataTreasury(JSON.parse(local));
        return JSON.parse(local);
      }
    } catch (error) {
      return undefined;
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setSaveData(dataTreasury);
  }, [setSaveData]);

>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
  return (
    <div>
      <div>
        <img width="1490px" height="735px" src={Po} alt="" />
      </div>
      <Username currentUser={currentUser} />
<<<<<<< HEAD
      <ShowVocab seletedTreasury={seletedTreasury} />
=======
      <ShowVocab selectedTreasury={selectedTreasury} />
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
    </div>
  );
}

export default Prepare;
