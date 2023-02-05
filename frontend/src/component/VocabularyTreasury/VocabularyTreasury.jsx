import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Username from "../Category/Username";
import "./VocabularyTreasury.css"
import "../Category/Option.css"

function VocabularyTreasury({ currentUser }) {
  const navigate = useNavigate();
  const [treasurys, setTreasurys] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/treasurys/").then((data) => {
      setTreasurys(data.data);
    });
  }, []);

  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="VocabularyTreasury-details">
        <p>Vocabulary Treasury</p>
      </div>
      <div className="frame-Option-one">
        <div className="Option-one"></div>
        <div className="photo-Option-one"></div>
        <div className="name-Option-one">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_title)}
          </p>
          <p id="dateplay-details">
            Last played date :{" "}
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_date)}
          </p>
        </div>
        <div className="iconplay-Option-one"></div>
        <div className="numberword-Option-one">
          <p id="numberword-one">
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.total_vocab)}
          </p>
          <p id="word-one">word</p>
        </div>

        <div className="Option-two"></div>
        <div className="photo-Option-two"></div>
        <div className="name-Option-two">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 2)
              .map((data) => data.treasury_title)}
          </p>
          <p id="dateplay-details">
            Last played date :{" "}
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_date)}
          </p>
        </div>
        <div className="iconplay-Option-two"></div>
        <div className="numberword-Option-two">
          <p id="numberword-two">
            {treasurys
              .filter((id) => id.treasury_id === 2)
              .map((data) => data.total_vocab)}
          </p>
          <p id="word-two">word</p>
        </div>

        <div className="Option-three"></div>
        <div className="photo-Option-three"></div>
        <div className="name-Option-three">
          <p>GameWord</p>
          <p id="dateplay-details">date</p>
        </div>
        <div className="iconplay-Option-three"></div>
        <div className="numberword-Option-three">
          <p id="numberword-three">10</p>
          <p id="word-three">word</p>
        </div>
      </div>
    </div>
  );
}

export default VocabularyTreasury;
