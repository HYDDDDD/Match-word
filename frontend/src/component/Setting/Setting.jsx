import React, { useState } from "react";
import "../Setting/Setting.css";
import Edit from "../../Picture/Edit-setting.png";
import Close from "../../Picture/close.png";

function Setting() {
  const [selectGeneral, setSelectGeneral] = useState(false);

  return (
    <div className="backgroungSetting">
      <div className="titleSetting">
        <div>
          <div className="rec-setting"></div>
          <div className="rec-container">
            <h3>SETTING</h3>
          </div>
        </div>
        <div className="closeSetting">
          <img src={Close} alt="" />
        </div>
      </div>
      <div className="boxSetting">
        {selectGeneral ? (
          <div className="containerSetting">
            <div className="selectMenu">
              <div
                className="btnGeneral"
                onClick={() => setSelectGeneral((val) => !val)}
              >
                <h3>ทั่วไป</h3>
              </div>
              <div
                className="btnOther-selected"
                onClick={() => setSelectGeneral((val) => !val)}
              >
                <h3>อื่นๆ</h3>
              </div>
            </div>
            <div className="listDataEdit">
              <div className="list-data">
                <div>พื้นหลัง</div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="list-data">
                <div>ภาษา</div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="containerSetting">
            <div className="selectMenu">
              <div
                className="btnGeneral-selected"
                onClick={() => setSelectGeneral((val) => !val)}
              >
                <h3>ทั่วไป</h3>
              </div>
              <div
                className="btnOther"
                onClick={() => setSelectGeneral((val) => !val)}
              >
                <h3>อื่นๆ</h3>
              </div>
            </div>
            <div className="listDataEdit">
              <div className="list-data">
                <div>ชื่อผู้ใช้งาน</div>
                <div>
                  <img src={Edit} alt="" width={"35px"} />
                </div>
              </div>
              <div className="list-data">
                <div>อีเมล</div>
                <div>
                  <img src={Edit} alt="" width={"35px"} />
                </div>
              </div>
              <div className="list-data">
                <div>รหัสผ่าน</div>
                <div>
                  <img src={Edit} alt="" width={"35px"} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Setting;
