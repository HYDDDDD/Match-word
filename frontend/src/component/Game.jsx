import React, { useState, useEffect } from "react";
import "./game.css";
import bggame from "../img-game/bg-game.png";
import bgword from "../img-game/bg-word.png";
import menu from "../img-game/menu.png";
import stop from "../img-game/stop.png";
import wordbg from "../img-game/word-bg.png";
import bgstop from "../img-game/bg-stop.png";
import btnadd from "../img-game/btn-add.png";
import btnedit from "../img-game/btn-edit.png";
import btnexit from "../img-game/btn-exit.png";
import { useNavigate } from "react-router-dom";
import btnmain from "../img-game/btn-main.png";
import btnsetting from "../img-game/btn-setting.png";
import btntreasury from "../img-game/btn-treasury.png";
import menubg from "../img-game/menu-bg.png";
import axios from "axios";

function Game({ selectedTreasury }) {
  const navigate = useNavigate();
  const [statusStop, setStatusStop] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);
  const [getVocabs, setGetVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [vocabEngs, setVocabEngs] = useState([]);
  const [vocabThais, setVocabThais] = useState([]);
  const [selectedWord1, setSelectedWord1] = useState("");
  const [selectedWord2, setSelectedWord2] = useState("");
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedEngs, setSelectedEngs] = useState([]);
  const [selectedThais, setSelectedThais] = useState([]);

  //vocab_correct
  //vocab_wrong

  //Get vocabularys in table.
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/vocabularys/").then((data) => {
      setGetVocabs(data.data);
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
  }, [getVocabs]);

  //Get Vocabularys store in vocabEngs and vocabThais. If have selected word store again.
  useEffect(() => {
    let data = getVocabs
      .filter((data) => data.treasury_id[0] === selectedTreasury.treasury_id)
      .map((data) => {
        return data;
      });

    if (data) {
      data.map((data) => {
        setVocabEngs((vocab) => [...vocab, data.vocabulary]);
        setVocabThais((vocab) => [...vocab, data.thai_vocab]);
      });
      // console.log(data);
    }

    if (selectedEngs[0] !== undefined) {
      vocabEngs.map(() => {
        selectedEngs.map((selected) => {
          // console.log(selected);
          let data = vocabEngs
            .filter((words) => (words === selected) === false)
            .map((data) => {
              return data;
            });

          setVocabEngs(data);
        });
      });
    }

    if (selectedThais[0] !== undefined) {
      vocabThais.map(() => {
        selectedThais.map((selected) => {
          // console.log(selected);
          let data = vocabThais
            .filter((words) => (words === selected) === false)
            .map((data) => {
              return data;
            });

          setVocabThais(data);
        });
      });
    }
  }, [getVocabs, selectedTreasury.treasury_id, selectedEngs, selectedThais]);

  useEffect(() => {
    const a = vocabEngs.sort();
    vocabThais.sort();
    console.log(a);
  }, [vocabEngs]);

  //Check select 2 word
  useEffect(() => {
    //Check select 2 word
    if (selectedWord1 !== "" && selectedWord2 !== "") {
      // console.log(selectedWord1 + " " + selectedWord2);

      //Send word to function for set value and show.
      selectedEng(selectedWord1);
      selectedThai(selectedWord2);

      //Count for end game.
      if (count !== vocabs.length) {
        setCount(Number(count) + 1);
      }

      //Check correct or wrong and save data in database.
      let data = Boolean(
        vocabs.find((data) => {
          return (
            data.vocabulary === selectedWord1 &&
            data.thai_vocab === selectedWord2
          );
        })
      );

      //Save data in database.
      if (data === true) {
        let word = vocabs
          .filter((data) => data.vocabulary === selectedWord1)
          .map((data) => {
            return data;
          });

        word.map((data) => {
          let vocab_status = "T";
          axios
            .patch(`http://127.0.0.1:8000/vocabularys/${data.vocabulary_id}`, {
              vocab_status: vocab_status,
            })
            .then(() => {
              vocab_status = "";
            })
            .catch((err) => console.log(err));
        });
      } else {
        let word = vocabs
          .filter((data) => data.vocabulary === selectedWord1)
          .map((data) => {
            return data;
          });

        word.map((data) => {
          let vocab_status = "F";
          axios
            .patch(`http://127.0.0.1:8000/vocabularys/${data.vocabulary_id}`, {
              vocab_status: vocab_status,
            })
            .then(() => {
              vocab_status = "";
            })
            .catch((err) => console.log(err));
        });
      }

      setSelectedWord1("");
      setSelectedWord2("");
    }
  }, [selectedWord1, selectedWord2, count]);

  //END GAME
  useEffect(() => {
    if (count !== 0 && count === vocabs.length) {
      navigate("/history");
    }
  }, [vocabs, count]);

  const selectedEng = (word) => {
    setSelectedEngs((words) => [...words, word]);
  };

  const selectedThai = (word) => {
    setSelectedThais((words) => [...words, word]);
  };

  return (
    <>
      <div id="game">
        <div className="bg-game" weight="1490px" height="735px">
          <div className="main-game">
            {/* <img id="bg-game" src={bggame} weight="50px" height="500px"/> */}
            <img
              id="menu"
              src={menu}
              weight="50px"
              height="50px"
              onClick={() => setStatusMenu((val) => !val)}
              alt=""
            />
            {!statusMenu ? (
              <></>
            ) : (
              <>
                <div className="menu-bg">
                  <div>
                    <img
                      id="btn-main"
                      src={btnmain}
                      weight="110px"
                      height="110px"
                      onClick={() => navigate("/Main")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      id="btn-setting"
                      src={btnsetting}
                      weight="100px"
                      height="100px"
                      alt=""
                    />
                    <img
                      id="btn-treasury"
                      src={btntreasury}
                      weight="100px"
                      height="100px"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}

            <img
              id="stop"
              src={stop}
              weight="40px"
              height="40px"
              onClick={() => setStatusStop((val) => !val)}
              alt=""
            />
            {!statusStop ? (
              <></>
            ) : (
              <>
                <div className="bg-stop">
                  <div>
                    <img
                      id="btn-add"
                      src={btnadd}
                      weight="100px"
                      height="100px"
                      alt=""
                      onClick={() => navigate("/prepare")}
                    />
                  </div>
                  <div>
                    <img
                      id="btn-edit"
                      src={btnedit}
                      weight="100px"
                      height="100px"
                      alt=""
                      onClick={() => navigate("/prepare")}
                    />
                    <img
                      id="btn-exit"
                      src={btnexit}
                      weight="150px"
                      height="150px"
                      onClick={() => navigate("/Main")}
                      alt=""
                    />
                  </div>
                  {/* <div onClick={() => navigate("/Main")}>
                        <img id="btn-exit" src={btnexit} weight="150px" height="150px" onClick={() => navigate("/Main")}/>
                    </div> */}
                </div>
              </>
            )}
            {/* <img id="word-bg" src={wordbg} weight="500px" height="680px" />
            <img id="bg-word" src={bgword} weight="30px" height="80px" />
            <img id="bg-word1" src={bgword} weight="30px" height="80px" />
            <img id="bg-word2" src={bgword} weight="30px" height="80px" />
            <img id="bg-word3" src={bgword} weight="30px" height="80px" />
            <img id="bg-word4" src={bgword} weight="30px" height="80px" />
            <img id="bg-word5" src={bgword} weight="30px" height="80px" />
            <img id="bg-word6" src={bgword} weight="30px" height="80px" />
            <img id="bg-word7" src={bgword} weight="30px" height="80px" />
            <img id="bg-word8" src={bgword} weight="30px" height="80px" />
            <img id="bg-word9" src={bgword} weight="30px" height="80px" />
            <img id="bg-word10" src={bgword} weight="30px" height="80px" />
            <img id="bg-word11" src={bgword} weight="30px" height="80px" />
            <img id="bg-word12" src={bgword} weight="30px" height="80px" />
            <img id="bg-word13" src={bgword} weight="30px" height="80px" />
            <img id="bg-word14" src={bgword} weight="30px" height="80px" />
            <img id="bg-word15" src={bgword} weight="30px" height="80px" />
            <img id="bg-word16" src={bgword} weight="30px" height="80px" />
            <img id="bg-word17" src={bgword} weight="30px" height="80px" />
            <img id="bg-word18" src={bgword} weight="30px" height="80px" />
            <img id="bg-word19" src={bgword} weight="30px" height="80px" /> */}
          </div>
          <div className="boxVocab">
            <div>
              {vocabEngs.sort().map((vocab, index) => {
                return (
                  <div
                    className="boxVocabEng"
                    key={index}
                    onClick={() => setSelectedWord1(vocab)}
                    style={{ fontSize: "35px", color: "white" }}
                  >
                    {vocab}
                  </div>
                );
              })}
            </div>
            <div>
              {vocabThais.sort().map((vocab, index) => {
                return (
                  <div
                    className="boxVocabThai"
                    key={index}
                    onClick={() => setSelectedWord2(vocab)}
                    style={{ fontSize: "35px", color: "white" }}
                  >
                    {vocab}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
