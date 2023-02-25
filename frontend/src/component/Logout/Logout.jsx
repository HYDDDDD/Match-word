import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout({ setShowLogout }) {
  const navigate = useNavigate();

  return (
    <div className="boxbig">
      <div className="logout-Q">Do you want to log out?</div>
      <div className="logout-yes" onClick={() => navigate("/")}>
        Yes
      </div>
      <div className="logout-no" onClick={() => setShowLogout(false)}>
        No
      </div>
    </div>
  );
}

export default Logout;
