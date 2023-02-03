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
