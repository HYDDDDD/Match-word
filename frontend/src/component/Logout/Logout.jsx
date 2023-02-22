import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout({ setShowLogout }) {
  const navigate = useNavigate();

  return (
    <div className="boxbig">
      <div className="font1">Do you want to log out?</div>
      <div className="" onClick={() => navigate("/")}>
        Yes
      </div>
      <div className="" onClick={() => setShowLogout(false)}>
        No
      </div>
    </div>
  );
}

export default Logout;
