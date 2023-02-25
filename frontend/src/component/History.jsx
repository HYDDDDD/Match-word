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
import axios from "axios";


function History({ selectedTreasury }) {
  const navigate = useNavigate();
  const [statusClick, setStatusClick] = useState(false);
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [getTreasury, setGetTreasury] = useState([]);
  const [score, setScore] = useState([]);
  const [scoreF, setScoreF] = useState([]);
  const [total, setTotal] = useState([]);
  const [title, setTitle] = useState([]);
 
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
        return data;
      });

      if (data) {
        data.map((data) => {
          setTitle((treasuryTitle) => [...treasuryTitle, data.treasury_title]);
        })
      }

    setTitle(data)
    console.log(data)
  }, [getTreasury, setTitle])

  //Get Score
  useEffect(() => {
    //Get Vocabs True
    let data = getVocabs
      .filter((data) => data.vocab_status === 'T')
      .map((data) => {
        return data;
      });

      if (data) {
        setVocabs(data);
      }

    //Get Vocabs False
    let info = getVocabs
      .filter((info) => info.vocab_status === 'F')
      .map((info) => {
        return info;
      });

      if (info) {
        setVocabs(info);
      }

      console.log(data)
    setScore(data)
    setScoreF(info)
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
  
  setTotal(data)

  console.log(total)

},[getVocabs])
  
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
          <div style={{display: "flex"}} >
          คำที่ถูก:
              {score.map((data, index) => {
                return (
                  <div
                  // className="text-click" 
                  // 
                  key={index} 
                  >
                    {data.vocabulary},
                  </div>
                )
              })}
            </div>
            {/* คำที่ถูก :
            Dragonfly,Altogether,Addition,Subtraction,Left,Remains,Wear,Long */}
          </b>
          <b id="hidetext2">
           <div style={{display: "flex"}}>
          คำที่ผิด: 
              {scoreF.map((data, index) => {
                return (
                  <div
                  // className="text-click" 
                  key={index}
                  // style={{position: "fixed"}}
                  >
                  {data.vocabulary},
                  </div>
                )
              })}
            </div>
            {/* คำที่ผิด : Difference,Twelve  */}
            {/* {scoreF.map((data, index) => 
            <div key={index}>
              คำที่ผิด: {data.vocabulary}</div>)} */}
          </b>
            <img id="toparrow" src={toparrow} weight="30" height={30} />
            <img id="hideline" src={hideline} />
            </div>
            )}

        {/* Title Demo */}
        <div className="text">
          <p id="t1">
            <div>
              {title.map((treasuryTitle, index) => {
                return (
                  <div
                  className="text" id="t1"
                  key={index}
                  >
                  {treasuryTitle.treasury_title}
                  </div>
                )
              })}
            </div>
          </p>
        </div> 

        {/* Score Demo */}
        <div className="text">
          <p id="t2">
            {score.filter((id) => id.vocab_status === 'T').length}
          </p>
        </div>

        {/* Total Vocab Demo */}
        <div className="text">
          <p id="t3">
          {vocabs.filter((id) => id.treasury_id[0] === 1).length}
          </p>
        </div>
        
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
           {/* <b id="t1"> Unit2 </b> */}
          {/* <b id="t2"> 10 </b> */}
          {/* <b id="t3"> 10 </b> */}
        </div>
        
        {/* แท็บข้าง */}
        <div className="tab-history">
          <img id="bg-tab" src={tab} weight="50px" height="500px" />
          <div id="cursor-his" onClick={() => navigate("/vocabularyTreasury")}>
            <img id="treasury" src={treasury} weight="50px" height="50px" />
          </div>
          <p className="tab-text" id="treasury-text">
            คลัง
          </p>
          <div onClick={() => navigate("/history")}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default History;



