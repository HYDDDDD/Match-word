import React from "react";
import Username from "./Username";
import "./Category.css";
import Option from "./Option";
import { useNavigate } from "react-router-dom";

function Category({ currentUser, setSeletedTreasury }) {
  const navigate = useNavigate();

  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="category-details">
        <p>Category</p>
      </div>

      <div className="Option">
        <Option setSeletedTreasury={setSeletedTreasury} />
      </div>
      <button onClick={() => navigate("/vocabularyTreasury")}>Treasury</button>
    </div>
  );
}

export default Category;
