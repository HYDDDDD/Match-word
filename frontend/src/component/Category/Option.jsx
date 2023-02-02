import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Option.css";
import { useNavigate } from "react-router-dom";

function Option({ setSeletedTreasury }) {
  const navigate = useNavigate();
  const [treasurys, setTreasurys] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/treasurys/").then((data) => {
      setTreasurys(data.data);
    });
  }, []);

  const findCategory = (idCategory) => {
    treasurys
      .filter((id) => id.treasury_id === idCategory)
      .map((data) => setSeletedTreasury(data));
    navigate("/prepare");
  };

  return (
    <>
      <div className="frame-Option-one">
        <div className="Option-one"></div>
        <div className="photo-Option-one"></div>
        <div className="name-Option-one" onClick={() => findCategory(1)}>
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_title)}
          </p>
        </div>
        <div className="iconplay-Option-one"></div>
        <div className="numberword-Option-one">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.total_vocab)}
          </p>
          <p>word</p>
        </div>

        <div className="Option-two"></div>
        <div className="photo-Option-two"></div>
        <div className="name-Option-two" onClick={() => findCategory(2)}>
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 2)
              .map((data) => data.treasury_title)}
          </p>
        </div>
        <div className="iconplay-Option-two"></div>
        <div className="numberword-Option-two">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 2)
              .map((data) => data.total_vocab)}
          </p>
          <p>word</p>
        </div>

        <div className="Option-three"></div>
        <div className="photo-Option-three"></div>
        <div className="name-Option-three">
          <p>GameWord</p>
        </div>
        <div className="iconplay-Option-three"></div>
        <div className="numberword-Option-three">
          <p>10</p>
          <p>word</p>
        </div>
      </div>
    </>
  );
}

export default Option;
