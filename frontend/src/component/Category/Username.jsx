import React from "react";
import "./Username.css";
import Photo from "../../Picture/no1.png";
<<<<<<< HEAD
import Sound from "../../Picture/no6.png";
import Thai from "../../Picture/no7.png";
=======
>>>>>>> f6a134eccf02194e8422f1f996b72eadcbfc3b51

function Username({ currentUser }) {
  return (
    <div className="username">
      <div className="frame-username">
        <div className="photo-username">
          <img width="63px" height="63px" src={Photo} alt="" />
        </div>
        <div className="description-username">
          <p>{currentUser.username}</p>
          <p>Point : 100</p>
        </div>
      </div>
      <div className="group-icon">
        <div className="icon1-username">
          <img width="63px" height="63px" src={Sound} alt="" />
        </div>
        <div className="icon2-username">
          <img width="63px" height="63px" src={Thai} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Username;
