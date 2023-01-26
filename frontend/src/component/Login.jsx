import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getAllUsers = () => {
    axios
      .get("http://127.0.0.1:8000/users/")
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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

  const login = (event) => {
    event.preventDefault(); //when submitting and refreshing your page so when it save data.

    if (handleValidation() === true) {
      users.find((user) => {
        //loop
        if (
          (user.username === username && user.password === password) === true
        ) {
          setCurrentUser({
            username: user.username,
            email: user.email,
            password: user.password,
          });
          navigate("/editProfile");
        }
      });
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
