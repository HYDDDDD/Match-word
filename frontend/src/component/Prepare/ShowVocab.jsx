import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Prepare.css";

function ShowVocab({ selectedTreasury }) {
  const navigate = useNavigate();
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

  // console.log(vocabs);

  return (
    <div>
      <div className="details-boxframe">
        <div className="details-boxbig"></div>
        <div className="photo-showVo"></div>
        <div id="name-showVo">{selectedTreasury.treasury_title}</div>
        <div id="date-showVo">
          Last played date : {selectedTreasury.treasury_date}
        </div>
        <div id="boxword-showVo">
          <div id="numberword-one">
            {
              vocabs.filter(
                (id) => id.treasury_id[0] === selectedTreasury.treasury_id
              ).length
            }
          </div>
          <p id="word-showVo">Word</p>
        </div>
        <div id="boxedit-showVo" onClick={() => navigate("/editVocabulary")}>
          <div id="photoedit-showVo"></div>
          <div id="word-shoeVo" onClick={() => navigate("/editVocabulary")}>
            <p>Edit</p>
          </div>
        </div>
      </div>
      <div className="details-boxsmall">
        {vocabs.map((vocab, index) => {
          return (
            <div id="showvocad" key={index}>
              {index + 1}. {vocab.vocabulary} - {vocab.thai_vocab}
            </div>
          );
        })}
      </div>
      <div>
        <button id="goplay-showVocab" onClick={() => navigate("/Game")}>
          GO to Play
        </button>
      </div>
    </div>
  );
}

export default ShowVocab;
