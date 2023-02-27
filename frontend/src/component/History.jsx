import React from "react";
import "./history.css";
import "./Main";
import "./Game";
import "./History";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Close from "../Picture/close.png";
import axios from "axios";
import Menu from "./Menu/Menu";

function History({ selectedTreasury }) {
  const navigate = useNavigate();
  const [statusClick, setStatusClick] = useState(false);
  const [statusClick2, setStatusClick2] = useState(false);
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [getTreasury, setGetTreasury] = useState([]);
  const [score, setScore] = useState([]);
  const [scoreF, setScoreF] = useState([]);
  const [total, setTotal] = useState([]);
  const [title, setTitle] = useState([]);
  const [title2, setTitle2] = useState([]);

  //Get vocabularys in table.
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/vocabularys/").then((data) => {
      setGetVocabs(data.data);
    });
    axios.get("http://127.0.0.1:8000/treasurys/").then((data) => {
      setGetTreasury(data.data);
    });
  }, []);

  //Get vocabulary in treasury.
  useEffect(() => {
    let data = getVocabs
      .filter((data) => data.treasury_id[0] === selectedTreasury.treasury_id)
      .map((data) => {
        return data;
      });

    if (data) {
      setVocabs(data);
    }

    let info = getTreasury
      .filter((info) => info.treasury_id[0] === selectedTreasury.treasury_id)
      .map((info) => {
        return info;
      });

    if (info) {
      setVocabs(info);
    }
  }, [getVocabs, getTreasury]);

  //Get Title
  useEffect(() => {
    let data = getTreasury
      .filter((data) => data.treasury_id === selectedTreasury.treasury_id)
      .map((data) => {
        return data.treasury_title;
      });

    setTitle(data);
  }, [getTreasury, setTitle]);

  //Get Score
  useEffect(() => {
    //Get Vocabs True
    let data = getVocabs
      .filter((data) => data.vocab_status === "T")
      .map((data) => {
        return data;
      });

    console.log(data);

    if (data) {
      setVocabs(data);
    }

    //Get Vocabs False
    let info = getVocabs
      .filter((info) => info.vocab_status === "F")
      .map((info) => {
        return info;
      });

    if (info) {
      setVocabs(info);
    }

    setScore(data);
    setScoreF(info);
  }, [getVocabs, setScore, setScoreF]);

  //Get Total Vocab
  useEffect(() => {
    //Get Vocabs
    let data = getVocabs
      .filter((data) => data.treasury_id)
      .map((data) => {
        return data;
      });

    if (data) {
      setVocabs(data);
    }

    setTotal(data);
  }, [getVocabs]);

  return (
    <div className="backgroundHistory">
      <div className="titleSetting">
        <div>
          <div className="rec-history"></div>
          <div className="his-container">
            <h3>HISTORY</h3>
          </div>
          <div className="Menu-Setting">
            <Menu />
          </div>
        </div>
        <div className="closeSetting">
          <img src={Close} alt="" />
        </div>
      </div>

      <div className="boxHistory">
        {/* ตัวหนังสือ */}
        <div>
          <div>
            <img id="line" src={line} alt="" />
          </div>
          <div className="subtitleHistory">
            <div>หมวดหมู่</div>
            <div>คะแนน</div>
            <div>จำนวนศัพท์</div>
          </div>
          <div>
            <img id="line" src={line} alt="" />
          </div>
        </div>
        <div id="boxBasic">
          <div id="titleBasic">
            {getTreasury
              .filter((data) => (data.treasury_title === "Basic") === true)
              .map((data) => {
                return <div id="title">{data.treasury_title}</div>;
              })}
          </div>
          <div id="scoreBasic">
            {
              getVocabs
                .filter((data) => (data.treasury_id[0] === 1) === true)
                .filter((data) => data.vocab_status === "T").length
            }
          </div>
          <div id="totalVacabBasic">
            <div>{vocabs.filter((id) => id.treasury_id[0] === 1).length}</div>
            <div id="arrowBasic">
              {!statusClick ? (
                <img
                  // id="hisarrow"
                  src={hisarrow}
                  alt=""
                  weight="30"
                  height={30}
                  onClick={() => setStatusClick((val) => !val)}
                />
              ) : (
                <img
                  id="toparrow"
                  src={toparrow}
                  weight="30"
                  height={30}
                  alt=""
                  onClick={() => setStatusClick((val) => !val)}
                />
              )}
            </div>
          </div>
        </div>

        <div>
          <img id="line" src={line} alt="" />
        </div>

        {!statusClick ? (
          <></>
        ) : (
          <div>
            <div id="showWord">
              <div>คำที่ถูก:</div>
              <div id="words">
                {getVocabs
                  .filter((data) => (data.treasury_id[0] === 1) === true)
                  .filter((data) => (data.vocab_status === "T") === true)
                  .map((data) => {
                    return <div id="text-click"> {data.vocabulary},</div>;
                  })}
              </div>
            </div>
            <div id="showWord">
              <div>คำที่ผิด:</div>
              <div id="words">
                {getVocabs
                  .filter((data) => (data.treasury_id[0] === 1) === true)
                  .filter((data) => (data.vocab_status === "F") === true)
                  .map((data) => {
                    return <div id="text-click"> {data.vocabulary},</div>;
                  })}
              </div>
            </div>
            <div>
              <img id="line" src={line} alt="" />
            </div>
          </div>
        )}

        <div id="boxHard">
          <div id="titleHard">
            {getTreasury
              .filter((data) => (data.treasury_title === "Hard") === true)
              .map((data) => {
                return <div id="title">{data.treasury_title}</div>;
              })}
          </div>
          <div id="scoreHard">
            {
              getVocabs
                .filter((data) => (data.treasury_id[0] === 2) === true)
                .filter((data) => data.vocab_status === "T").length
            }
          </div>
          <div id="totalVacabHard">
            <div>{vocabs.filter((id) => id.treasury_id[0] === 2).length}</div>
            <div id="arrowHard">
              {!statusClick2 ? (
                <img
                  // id="hisarrow"
                  src={hisarrow}
                  alt=""
                  weight="30"
                  height={30}
                  onClick={() => setStatusClick2((val) => !val)}
                />
              ) : (
                <img
                  id="toparrow"
                  src={toparrow}
                  weight="30"
                  height={30}
                  alt=""
                  onClick={() => setStatusClick2((val) => !val)}
                />
              )}
            </div>
          </div>
        </div>

        <div>
          <img id="line" src={line} alt="" />
        </div>

        {!statusClick2 ? (
          <></>
        ) : (
          <div>
            <div id="showWord">
              <div>คำที่ถูก:</div>
              <div id="words">
                {getVocabs
                  .filter((data) => (data.treasury_id[0] === 2) === true)
                  .filter((data) => (data.vocab_status === "T") === true)
                  .map((data) => {
                    return <div id="text-click"> {data.vocabulary},</div>;
                  })}
              </div>
            </div>

            <div id="showWord">
              <div>คำที่ผิด:</div>
              <div id="words">
                {getVocabs
                  .filter((data) => (data.treasury_id[0] === 2) === true)
                  .filter((data) => (data.vocab_status === "F") === true)
                  .map((data) => {
                    return <div id="text-click"> {data.vocabulary},</div>;
                  })}
              </div>
            </div>
            <div>
              <img id="line" src={line} alt="" />
            </div>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
}

export default History;
