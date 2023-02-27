import React from "react";
import Username from "./Username";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import Option2 from "./Option2";

function Category2({ currentUser, setSelectedTreasury, setIdTreasury }) {
  const navigate = useNavigate();

  return (
    <div id="picNo2">
      <Username currentUser={currentUser} />
      <div id="category-details">
        <div id="titleCategory">
          <p>Category</p>
        </div>
      </div>
      <div className="Menu">
        <Menu />
      </div>

      <div className="Option">
        <Option2
          setSelectedTreasury={setSelectedTreasury}
          setIdTreasury={setIdTreasury}
        />
      </div>
    </div>
  );
}

export default Category2;
