import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Prepare.css"

function ShowVocab({ selectedTreasury }) {
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/vocabularys/").then((data) => {
      setGetVocabs(data.data);
    });
  }, []);

  useEffect(() => {
    let data = getVocabs
      .filter((data) => data.treasury_id[0] === selectedTreasury.treasury_id)
      .map((data) => {
        return data;
      });

    setVocabs(data);
  }, [getVocabs]);

  // console.log(selectedTreasury);

  return (
    <>
      <div className="details-boxframe">
        <div className="details-boxbig"></div>
        <div className="photo-showVo"></div>
        <div id="name-showVo">{selectedTreasury.treasury_title}</div>
        <div id="date-showVo">Last played date : {selectedTreasury.treasury_date}</div>
        <div id="boxword-showVo">
           <div id="numberword-one">{selectedTreasury.total_vocab}</div>
           <p id="word-one">Word</p>
        </div>
        <div id="boxedit-showVo">
           <div id="photoedit-showVo"></div>
           <div id="word-one">Edit</div>
        </div>
      </div>
      <div>
        {vocabs.map((vocab, index) => {
          return (
            <div key={index}>
              {index + 1}. {vocab.vocabulary} - {vocab.thai_vocab}
            </div>
          );
        })}
        <button>GO to Play</button>
      </div>
    </>
  );
}

export default ShowVocab;
