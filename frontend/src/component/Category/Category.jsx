import React from "react";
import Username from "./Username";
import "./Category.css";
import Po from "../../picture/no2.png";
import Option from "./Option";

function Category({ currentUser }) {
  return (
    <div>
      <div id="picNo2"></div>
      <Username currentUser={currentUser} />
      <Option />
      {/* <div className='section-username'>
          <p>Category</p>
        </div> */}
    </div>
  );
}

export default Category;
