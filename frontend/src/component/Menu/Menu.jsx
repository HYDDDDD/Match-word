import React, { useState } from "react";
import "../Main.css";
import tab from "../../img/bg-tab.png";
import treasury from "../../img/treasury.png";
import history from "../../img/history.png";
import logout from "../../img/log-out.png";
import setting from "../../img/setting.png";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Menu.css";

function Menu({ currentUser }) {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
      <div>
        <div className="tab">
          <img id="bg-tab" src={tab} alt="" />
          <div onClick={() => navigate("/Main")}>
            <div>
              <img
                id="home"
                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                weight="50px"
                height="50px"
                alt=""
              />
            </div>
            <p className="tab-text" id="home-text">
              หน้าหลัก
            </p>
          </div>
          <div id="cursor-his" onClick={() => navigate("/vocabularyTreasury")}>
            <img
              id="treasury"
              src={treasury}
              weight="50px"
              height="50px"
              alt=""
            />
          </div>
          <p className="tab-text" id="treasury-text">
            คลัง
          </p>
          <div id="cursor-his" onClick={() => navigate("/history")}>
            <img
              id="history"
              src={history}
              weight="50px"
              height="50px"
              alt=""
            />
          </div>
          <p className="tab-text" id="history-text">
            ประวัติ
          </p>
          <div id="cursor-his" onClick={() => navigate("/setting")}>
            <img
              id="setting"
              src={setting}
              weight="50px"
              height="50px"
              alt=""
            />
          </div>
          <p className="tab-text" id="setting-text">
            ตั่งค่า
          </p>
          <div onClick={() => setShowLogout(true)}>
            <img id="log-out" src={logout} weight="50px" height="50px" alt="" />
            <p className="tab-text" id="log-out-text">
              ออกจากระบบ
            </p>
          </div>
        </div>
      </div>
      {/* <div id="bg-tab">
        <img src={tab} alt="" />
      </div>
      <div id="container-tab">
        <div>
          <img
            // id="home"
            src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
            weight="50px"
            height="50px"
            alt=""
          />
          <p>หน้าหลัก</p>
        </div>
        <div>
          <img
            // id="home"
            src={treasury}
            weight="50px"
            height="50px"
            alt=""
          />
          <p>คลัง</p>
        </div>

        <div onClick={() => navigate("/history")}>
          <img src={history} weight="50px" height="50px" alt="" />
          <p>ประวัติ</p>
        </div>
        <div onClick={() => navigate("/setting")}>
          <img src={setting} weight="50px" height="50px" alt="" />
          <p>ตั่งค่า</p>
        </div>

        <div onClick={() => setShowLogout(true)}>
          <img src={logout} weight="50px" height="50px" alt="" />
          <p>ออกจากระบบ</p>
        </div>
      </div> */}
      {showLogout ? (
        <div id="boxPopUp">
          <Logout setShowLogout={setShowLogout} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Menu;
