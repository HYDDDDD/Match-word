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

      let info = getTreasury
      .filter((info) => info.treasury_title === 'Hard')
      .map((info) => {
        return info.treasury_title;
      });

     console.log(info);

    // if (data) {
    //   data.map((data) => {
    //     console.log(data);
    //     // setTitle((treasuryTitle) => [...treasuryTitle, data.treasury_title]);
    //   });
    // }

    setTitle(data);
    setTitle2(info)
    // console.log(data);
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

    // console.log(data);
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

    console.log(total);
  }, [getVocabs]);

  return (
    // <>
    //   <div id="main">
    //     {/* พื้นหลัง */}
    //     <div>
    //       <img id="bg-his" src={hisbg}  alt="" />
    //     </div>

    //     <div className="main-his">
    //       {/* <div>
    //         <img id="bghisword" src={bghisword} alt="" />
    //       </div>

    //       <Menu /> */}
    //       <div className="titleSetting">
    //         <div>
    //           <div className="rec-history"></div>
    //           <div className="his-container">
    //             <h3>HISTORY</h3>
    //           </div>
    //           <div className="Menu-Setting">
    //             <Menu />
    //           </div>
    //         </div>
    //         <div className="closeSetting">
    //           <img src={Close} alt="" />
    //         </div>
    //       </div>
    //       <div className="boxHistory">
    //         {/* <div>
    //           <img
    //             id="cross"
    //             src={cross}
    //             weight="40px"
    //             height="40px"
    //             onClick={() => navigate("/Main")}
    //             alt=""
    //           />
    //         </div> */}
    //         {/* <img id="hiswordbg" src={hiswordbg} weight="3000px" height="3000px" alt=""/> */}
    //         {/* <img id="line" src={line} alt="" /> */}
    //         {/* <img
    //           id="hisarrow"
    //           src={hisarrow}
    //           alt=""
    //           weight="30"
    //           height={30}
    //           onClick={() => setStatusClick((val) => !val)}
    //         /> */}
    //         {/* {!statusClick ? (
    //           <></>
    //         ) : (
    //           <div className="text-click">
    //             <b id="hidetext1">
    //               <div style={{ display: "flex" }}>
    //                 คำที่ถูก:
    //                 {score.map((data, index) => {
    //                   return (
    //                     <div
    //                       // className="text-click"
    //                       //
    //                       key={index}
    //                     >
    //                       {data.vocabulary},
    //                     </div>
    //                   );
    //                 })}
    //               </div>
    //             </b>
    //             <b id="hidetext2">
    //               <div style={{ display: "flex" }}>
    //                 คำที่ผิด:
    //                 {scoreF.map((data, index) => {
    //                   return (
    //                     <div
    //                       // className="text-click"
    //                       key={index}
    //                       // style={{position: "fixed"}}
    //                     >
    //                       {data.vocabulary},
    //                     </div>
    //                   );
    //                 })}
    //               </div>
    //             </b>
    //             <img
    //               id="toparrow"
    //               src={toparrow}
    //               weight="30"
    //               height={30}
    //               alt=""
    //             />
    //             <img id="hideline" src={hideline} alt="" />
    //           </div>
    //         )} */}
    //         {/* Title Demo */}
    //         {/* <div className="text">
    //           <p id="t1">
    //             <div>
    //               {title.map((treasuryTitle, index) => {
    //                 return (
    //                   <div className="text" id="t1" key={index}>
    //                     {treasuryTitle.treasury_title}
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </p>
    //         </div> */}

    //         {/* Score Demo */}
    //         {/* <div className="text">
    //           <p id="t2">
    //             {score.filter((id) => id.vocab_status === "T").length}
    //           </p>
    //         </div> */}

    //         {/* Total Vocab Demo */}
    //         {/* <div className="text">
    //           <p id="t3">
    //             {vocabs.filter((id) => id.treasury_id[0] === 1).length}
    //           </p>
    //         </div> */}

    //         {/* ตัวหนังสือ */}
    //         {/* <div className="text-title">
    //           <p id="tt1">
    //             <b>หมวดหมู่</b>
    //           </p>
    //           <p id="tt2">
    //             <b>คะแนน</b>
    //           </p>
    //           <p id="tt3">
    //             <b>จำนวน</b>
    //           </p>
    //           <p id="tt3-1">
    //             <b>ศัพท์</b>
    //           </p>
    //         </div> */}
    //         <div className="text">
    //           {/* <b id="t1"> Unit2 </b> */}
    //           {/* <b id="t2"> 10 </b> */}
    //           {/* <b id="t3"> 10 </b> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
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
      <div>
        <img id="line" src={line} alt="" />
      </div>

      {!statusClick ? (
        <>
          <div>
            <img
              id="hisarrow"
              src={hisarrow}
              alt=""
              weight="30"
              height={30}
              onClick={() => setStatusClick((val) => !val)}
            />
          </div>
        </>
      ) : (
          <div className="text-click">
            <b id="hidetext1">
              <div style={{ display: "flex" }}>
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
                  );
                })}
              </div>
            </b>
            <b id="hidetext2">
              <div style={{ display: "flex" }}>
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
                  );
                })}
              </div>
            </b>
            <img
              id="toparrow"
              src={toparrow}
              weight="30"
              height={30}
              alt=""
              onClick={() => setStatusClick((val) => !val)}
            />
            <img id="hideline" src={hideline} alt="" />
          </div>
        )}
        {/* Title Demo */}
        <div className="text">
          <p id="t1">
            <div id="his1">
              {/* {title.map((treasuryTitle, index) => {
                return (
                  <div className="text" id="t1" key={index}>
                    {treasuryTitle.treasury_title}
                  </div>
                );
              })} */}
              {/* Title by Faii */}
              {title.map((data, index) => {
                return <div key={index}>{data}</div>;
              })}
            </div>
          </p>
          <p id="t1-1">
            <div id="his2">
              {/* {title.map((treasuryTitle, index) => {
                return (
                  <div className="text" id="t1" key={index}>
                    {treasuryTitle.treasury_title}
                  </div>
                );
              })} */}
              {/* Title by Faii */}
              {title2.map((info, index) => {
                return <div key={index}>{info}</div>;
              })}
            </div>
          </p>
        </div>

        {/* Score Demo */}
        <div className="text">
          <p id="t2">
             {score.filter((id) => id.vocab_status === "T").length}
          </p>
           <p id="t2-2">
             {score.filter((id) => id.vocab_status === "N").length}
          </p>
        </div>

        {/* Total Vocab Demo */}
        <div className="text">
          <p id="t3">{vocabs.filter((id) => id.treasury_id[0] === 1).length}</p>
          <p id="t3-3">{vocabs.filter((id) => id.treasury_id[1] === 2).length}</p>
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
      </div>
    </div>
  );
}

export default History;
