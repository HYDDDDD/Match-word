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
          <Username currentUser={currentUser} />
          <div className="Menu-main">
            <Menu />
          </div>

          <div>
            <div className="center">
              <div onClick={() => navigate("/category")}>
                <img
                  id="play"
                  src={btnPlay}
                  weight="50px"
                  height="600px"
                  alt=""
                />
              </div>
              <div id="boxBtnAddTest">
                <div>
                  <img
                    onClick={() => navigate("/category2")}
                    id="add"
                    src={btnAdd}
                    weight="50px"
                    height="350px"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    id="test"
                    src={btnTest}
                    weight="20px"
                    height="300px"
                    alt=""
                  />
                </div>
              </div>
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
