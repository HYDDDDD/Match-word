import React from "react";
import Username from "./Username";
import "./Category.css";
import Option from "./Option";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

function Category({ currentUser, setSelectedTreasury, setIdTreasury }) {
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
        <Option
          setSelectedTreasury={setSelectedTreasury}
          setIdTreasury={setIdTreasury}
        />
      </div>
    </div>
  );
}

export default Category;
