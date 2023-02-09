import React from "react";
import "./history.css";
import "./Main";
import "./Game";
import "./History";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bghisword from "../img-his/bg-his-word.png";
import cross from "../img-his/cross.png";
import hisarrow from "../img-his/his-arrow.png";
import hisbg from "../img-his/his.jpeg";
import tab from "../img/bg-tab.png";
import history from "../img/history.png";
import logout from "../img/log-out.png";
import setting from "../img/setting.png";
import treasury from "../img/treasury.png";
import hiswordbg from "../img-his/h.png";
import line from "../img-his/line.png";
import toparrow from "../img-his/top-arrow.png";
import hideline from "../img-his/hide-line.png";
function History() {
  const navigate = useNavigate();
  const [statusClick, setStatusClick] = useState(false);

  return (
    <>
      <div id="main">
        {/* พื้นหลัง */}
        <div>
          <img id="bg-his" src={hisbg} weight="1490px" height="735px" />
        </div>

        <div className="main-his">
          <img id="bghisword" src={bghisword} />
          <img id="cross" src={cross} weight="40px" height="40px" onClick={() => navigate("/Main")}/>
          <img id="hiswordbg" src={hiswordbg} weight="3000px" height="3000px" />
          <img id="line" src={line} alt="" />
          <img
            id="hisarrow"
            src={hisarrow}
            alt=""
            weight="30"
            height={30}
            onClick={() => setStatusClick((val) => !val)}
          />

          {!statusClick ? (
            <></>
          ) : (
            <div className="text-click">
              <b id="hidetext1">
                คำที่ถูก :
                Dragonfly,Altogether,Addition,Subtraction,Left,Remains,Wear,Long
              </b>
              <b id="hidetext2">คำที่ผิด : Difference,Twelve </b>

              <img id="toparrow" src={toparrow} weight="30" height={30} />
              <img id="hideline" src={hideline} />
            </div>
          )}


          {/* ตัวหนังสือ */}
          <div className="text-title">
            <p id="tt1">
              <b>หมวดหมู่</b>
            </p>
            <p id="tt2">
              <b>คะแนน</b>
            </p>
            <p id="tt3">
              <b>จำนวน</b>
            </p>
            <p id="tt3-1">
              <b>ศัพท์</b>
            </p>
          </div>
          <div className="text">
            <b id="t1"> Unit2 </b>
            <b id="t2"> 10 </b>
            <b id="t3"> 10 </b>
          </div>

          {/* แท็บข้าง */}
          <div className="tab">
            <img id="bg-tab" src={tab} weight="50px" height="500px" />
            <img id="treasury" src={treasury} weight="50px" height="50px" />

            <p className="tab-text" id="treasury-text">
              คลัง
            </p>
            <div onClick={() => navigate("/history")}>
              <img id="history" src={history} weight="50px" height="50px" />
            </div>
            <p className="tab-text" id="history-text">
              ประวัติ
            </p>
            <img id="setting" src={setting} weight="50px" height="50px" />
            <p className="tab-text" id="setting-text">
              ตั่งค่า
            </p>
            <img id="log-out" src={logout} weight="50px" height="50px" />
            <p className="tab-text" id="log-out-text">
              ออกจากระบบ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
