<<<<<<< HEAD
import React, { useState, useEffect } from "react";

function ShowVocab({ seletedTreasury }) {
  console.log(seletedTreasury.treasury_title);
  return (
    <div>
      <div>
        <div>{seletedTreasury.treasury_title}</div>
        <div>Last played date : {seletedTreasury.treasury_date}</div>
        <div>{seletedTreasury.total_vocab} Word</div>
=======
import axios from "axios";
import React, { useState, useEffect } from "react";

function ShowVocab({ selectedTreasury }) {
  console.log(selectedTreasury);
  const [totalVocab, setTotalVocab] = useState([]);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/treasurys/").then((data) => {
  //     setTreasurys(data.data);
  //   });
  // }, []);

  // const findCategory = (idCategory) => {
  //   treasurys
  //     .filter((id) => id.treasury_id === idCategory)
  //     .map((data) => setSeletedTreasury(data));
  //   navigate("/prepare");
  // };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/vocabularys/").then((data) => {
      setTotalVocab(data.data);
    });
  }, []);

  // totalVocab.filter((id) => console.log(id.treasury_id[0] === ));

  return (
    <div>
      <div>
        <div>{selectedTreasury.treasury_title}</div>
        <div>Last played date : {selectedTreasury.treasury_date}</div>
        <div>{selectedTreasury.total_vocab} Word</div>
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
        <div>Edit</div>
      </div>
      <div></div>
    </div>
  );
}

export default ShowVocab;
