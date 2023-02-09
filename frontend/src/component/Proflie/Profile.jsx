import React from "react";
import Username from "../Category/Username";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile({ currentUser, selectedTreasury }) {
    const navigate = useNavigate();
  return (
    <>
      <div id="picNo2">
        <Username currentUser={currentUser} />
        <div id="prepare-details">
          <p>Profile</p>
        </div>
        <div className="frame-profile">
          <div className="photo-profile"></div>
          <div>
            <p className="name-profile">{currentUser.username}</p>
            <p className="email-profile">{currentUser.email}</p>
          </div>
          <div className="edit-profile">
            <div
              id="boxedit-showVo"
              onClick={() => navigate("/editVocabulary")}
            >
              <div id="photoedit-showVo"></div>
              <div id="word-shoeVo" onClick={() => navigate("/editVocabulary")}>
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
