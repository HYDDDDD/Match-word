import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

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
      navigate("/editProfile");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <>
      <form>
        <h1>Login</h1>
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
        <button
          type="submit"
          onClick={login}
          onKeyPress={(event) => {
            event.key === "Enter" && login();
          }}
        >
          Log in
        </button>
      </form>
      <button onClick={() => navigate("/register")}>Sign Up!</button>
    </>
  );
}

export default Login;
