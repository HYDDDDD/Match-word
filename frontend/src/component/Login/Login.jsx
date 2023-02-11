import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage";
import "./Login.css";
import Logo from "../../Picture/Logo.png";
import Google from "../../Picture/google.png";
import Facebook from "../../Picture/facebook.png";

function Login({ users, setCurrentUser }) {
  const [getLocalStorage, setSaveData, clearLocalStorage] =
    useLocalStorage("Current User");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleValidation = () => {
    if (username === "" && username === null) {
      alert("Please enter your user name.");
      return false;
    } else if (password === "" && password === null) {
      alert("Please enter your password.");
      return false;
    }
    setUsername("");
    setPassword("");
    return true;
  };

  const checkUser = () => {
    const userCheck = users.find(
      (user) => user.username === username && user.password === password
    );
    if (userCheck) {
      return true;
    } else {
      return false;
    }
  };

  const login = (event) => {
    event.preventDefault(); //when submitting and refreshing your page so when it save data.

    if (handleValidation() === true && checkUser() === true) {
      users.find((user) => {
        //loop
        if (
          (user.username === username && user.password === password) === true
        ) {
          setCurrentUser({
            user_id: user.user_id,
            username: user.username,
            email: user.email,
          });
          setSaveData({
            user_id: user.user_id,
            username: user.username,
            email: user.email,
          });
        }
      });
      navigate("/Main");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="backgroundLogin">
      <div className="boxLogin">
        <div className="login">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <form>
            <div className="formLogin">
              <input
                type="text"
                placeholder="User name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="box-login">
              <button
                className="btn"
                type="submit"
                onClick={login}
                onKeyPress={(event) => {
                  event.key === "Enter" && login();
                }}
              >
                Log in
              </button>
            </div>
            <div className="box-or">
              <div className="box-container">
                <hr />
                <div style={{ fontWeight: "bold" }}>Or</div>
                <hr />
              </div>
            </div>
            <div className="btn-login-other">
              <button className="btn" style={{ marginRight: "80px" }}>
                <img src={Google} alt="" />
              </button>
              <button className="btn btnFacebook">
                <img src={Facebook} alt="" />
              </button>
            </div>
            <div style={{ fontWeight: "bold", margin: "20px 0 10px 0" }}>
              Not register?
            </div>
            <div
              className="btnSignUp"
              onClick={() => navigate("/register")}
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "white",
                cursor: "pointer",
                margin: "-5px",
              }}
            >
              Sign Up!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
