import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import Po from "../../Picture/no2.png";
=======
import Po from "../../picture/no2.png";
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
import Username from "../Category/Username";

function VocabularyTreasury({ currentUser }) {
  const navigate = useNavigate();
  const [treasurys, setTreasurys] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/treasurys/").then((data) => {
      setTreasurys(data.data);
    });
  }, []);

  return (
    <>
      <div>
        <img width="1490px" height="735px" src={Po} alt="" />
      </div>
      <Username currentUser={currentUser} />
      <div className="frame-Option-one">
        <div className="Option-one"></div>
        <div className="photo-Option-one"></div>
        <div className="name-Option-one">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_title)}
          </p>
          <p>
            Last played date :{" "}
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_date)}
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
        <div className="name-Option-two">
          <p>
            {treasurys
              .filter((id) => id.treasury_id === 2)
              .map((data) => data.treasury_title)}
          </p>
          <p>
            Last played date :{" "}
            {treasurys
              .filter((id) => id.treasury_id === 1)
              .map((data) => data.treasury_date)}
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

export default VocabularyTreasury;
