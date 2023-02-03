import React from "react";
import Username from "./Username";
import "./Category.css";
<<<<<<< HEAD
import Option from "./Option";
import { useNavigate } from "react-router-dom";

function Category({ currentUser, setSeletedTreasury }) {
=======
import Po from "../../picture/no2.png";
import Option from "./Option";
import { useNavigate } from "react-router-dom";

function Category({ currentUser, setSelectedTreasury }) {
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
  const navigate = useNavigate();

  return (
    <div>
      <div id="picNo2"></div>
      <Username currentUser={currentUser} />
<<<<<<< HEAD
      <Option setSeletedTreasury={setSeletedTreasury} />
      <button onClick={() => navigate("/vocabularyTreasury")}>Treasury</button>
=======
      <Option setSelectedTreasury={setSelectedTreasury} />
      <button onClick={() => navigate("/vocabularyTreasury")}>คลัง</button>
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
    </div>
  );
}

export default Category;
