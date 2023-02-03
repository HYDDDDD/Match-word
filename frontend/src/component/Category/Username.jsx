import React from "react";
import "./Username.css";
<<<<<<< HEAD
import Photo from "../../Picture/no1.png";
=======
import Photo from "../../picture/no1.png";
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81

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
