import React from "react";
import "./game.css";
import bggame from "../img-game/bg-game.png";
import bgword from "../img-game/bg-word.png";
import menu from "../img-game/menu.png";
import stop from "../img-game/stop.png";
import wordbg from "../img-game/word-bg.png";
import bgstop from "../img-game/bg-stop.png";
import { useState } from "react";
import btnadd from "../img-game/btn-add.png";
import btnedit from "../img-game/btn-edit.png";
import btnexit from "../img-game/btn-exit.png";
import { useNavigate } from "react-router-dom";
import btnmain from "../img-game/btn-main.png";
import btnsetting from "../img-game/btn-setting.png";
import btntreasury from "../img-game/btn-treasury.png";
import menubg from "../img-game/menu-bg.png";

function Game() {
  const navigate = useNavigate();
  const [statusStop, setStatusStop] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);

  return (
    <>
      <div id="game">
        <div className="bg-game" weight="1490px" height="735px">
          <div className="main-game">
            {/* <img id="bg-game" src={bggame} weight="50px" height="500px"/> */}
            <img id="menu" src={menu} weight="50px" height="50px" onClick={() => setStatusMenu((val) => !val)}/>
            {!statusMenu ? (
              <></>
            ) : (
              <>
                <div className="menu-bg" >
                    <div>
                        <img id="btn-main" src={btnmain} weight="110px" height="110px" onClick={() => navigate("/Main")}/>
                    </div>
                    <div>
                        <img id="btn-setting" src={btnsetting} weight="100px" height="100px" />
                        <img id="btn-treasury" src={btntreasury} weight="100px" height="100px"/>
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
            />
            {!statusStop ? (
              <></>
            ) : (
              <>
                <div className="bg-stop" >
                    <div>
                        <img id="btn-add" src={btnadd} weight="100px" height="100px"/>
                    </div>
                    <div>
                        <img id="btn-edit" src={btnedit} weight="100px" height="100px" />
                        <img id="btn-exit" src={btnexit} weight="150px" height="150px" onClick={() => navigate("/Main")}/>
                    </div>
                    {/* <div onClick={() => navigate("/Main")}>
                        <img id="btn-exit" src={btnexit} weight="150px" height="150px" onClick={() => navigate("/Main")}/>
                    </div> */}

                </div>
                
              </>
            )}
            <img id="word-bg" src={wordbg} weight="500px" height="680px" />
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
            <img id="bg-word19" src={bgword} weight="30px" height="80px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
