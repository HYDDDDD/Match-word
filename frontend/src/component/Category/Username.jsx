import React from "react";
import "./Username.css";
import Photo from "../../picture/no1.png";

function Username({ currentUser }) {
  return (
    <>
      <div className="frame-Username">
        <div>
          <img width="63px" height="63px" src={Photo} alt="" />
        </div>
        <div className="namepoint-username">
          <p>{currentUser.username}</p>
          <p>Point : 100</p>
        </div>
        <div className="icon1-username"></div>
        <div className="icon2-username"></div>
      </div>
    </>
  );
}

export default Username;
