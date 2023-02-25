import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import "./Main";
import "./Game";
import "./History";
import profile from "../img/profile.png";
import tab from "../img/bg-tab.png";
import btnAdd from "../img/btnAdd.png";
import btnPlay from "../img/btnPlay.png";
import btnTest from "../img/btnTest.png";
import history from "../img/history.png";
import language from "../img/language.png";
import logout from "../img/log-out.png";
import setting from "../img/setting.png";
import sound from "../img/sound01.png";
import treasury from "../img/treasury.png";
import Username from "./Category/Username";
import Menu from "./Menu/Menu";

function Main({ currentUser }) {
  const navigate = useNavigate();

  return (
    <>
      <div id="main">
        <div className="bg">
          {/* <h1 className="main-page">User name</h1>
          <p className="main-page" id="point">
            point : 100{" "}
          </p>
          <div onClick={() => navigate("/Main")}>
            <img src={profile} id="profile" />
          </div> */}
          <Username currentUser={currentUser} />

          {/* <div className="tab-main">
            <img id="bg-tab" src={tab} weight="50px" height="500px" />
            <div
              id="cursor-his"
              onClick={() => navigate("/vocabularyTreasury")}
            >
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
            <img id="log-out" src={logout} weight="50px" height="50px" />
            <p className="tab-text" id="log-out-text">
              ออกจากระบบ
            </p>
          </div> */}
          <Menu />

          <div>
            <div className="center">
              <div onClick={() => navigate("/category")}>
                <img id="play" src={btnPlay} weight="50px" height="600px" alt=""/>
              </div>
              <img
                onClick={() => navigate("/editVocabulary")}
                id="add"
                src={btnAdd}
                weight="50px"
                height="350px"
                alt=""
              />
              <img id="test" src={btnTest} weight="20px" height="300px" alt=""/>
            </div>
          </div>

          {/* <div className="right-bar">
            <img id="sound" src={sound} weight="40px" height="40px" />
            <img id="language" src={language} weight="40px" height="40px" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Main;
