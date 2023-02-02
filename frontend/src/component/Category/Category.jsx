import React from "react";
import Username from "./Username";
import "./Category.css";
import Po from "../../picture/no2.png";
import Option from "./Option";
import { useNavigate } from "react-router-dom";

function Category({ currentUser }) {
  const navigate = useNavigate();

  return (
    <div>
      <div id="picNo2"></div>
      <Username currentUser={currentUser} />
      <Option />
      <button onClick={() => navigate("/vocabularyTreasury")}>คลัง</button>
    </div>
  );
}

export default Category;
