import React, { useState } from "react";
import "../Main.css";
import tab from "../../img/bg-tab.png";
import treasury from "../../img/treasury.png";
import history from "../../img/history.png";
import logout from "../../img/log-out.png";
import setting from "../../img/setting.png";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";

function Menu({ currentUser }) {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
      <div className="tab">
        <img id="bg-tab" src={tab} weight="50px" height="500px" />
        <div id="cursor-his" onClick={() => navigate("/vocabularyTreasury")}>
          <img id="treasury" src={treasury} weight="50px" height="50px" />
        </div>
        <p className="tab-text" id="treasury-text">
          คลัง
        </p>
        <div id="cursor-his" onClick={() => navigate("/history")}>
          <img id="history" src={history} weight="50px" height="50px" />
        </div>
        <p className="tab-text" id="history-text">
          ประวัติ
        </p>
        <div id="cursor-his" onClick={() => navigate("/setting")}>
          <img id="setting" src={setting} weight="50px" height="50px" />
        </div>
        <p className="tab-text" id="setting-text">
          ตั่งค่า
        </p>
        <div onClick={() => setShowLogout(true)}>
          <img id="log-out" src={logout} weight="50px" height="50px" />
          <p className="tab-text" id="log-out-text">
            ออกจากระบบ
          </p>
        </div>
      </div>
      {showLogout ? (
        <>
          <div>
            <Logout setShowLogout={setShowLogout} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Menu;
