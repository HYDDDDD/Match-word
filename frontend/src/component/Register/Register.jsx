import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Register/Register.css";
import Logo from "../../Picture/Logo.png";

function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Add user.
  const createUser = (event) => {
    event.preventDefault(); //when submitting and refreshing your page so when it save data.

    let url = "http://127.0.0.1:8000/users/";

    axios
      .post(url, newUser)
      .then(() => {
        setNewUser({
          username: "",
          email: "",
          password: "",
        });

        navigate("/");
        refreshPage();
      })
      .catch((err) => console.log(err));
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="backgroundRegister">
      <div className="boxRegister">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="textSignUp">Sign Up!</div>
        <form>
          <div className="formRegister">
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setNewUser({ ...newUser, username: event.target.value });
              }}
              value={newUser.username}
            />

            <input
              type="text"
              placeholder="Email"
              onChange={(event) => {
                setNewUser({ ...newUser, email: event.target.value });
              }}
              value={newUser.email}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setNewUser({ ...newUser, password: event.target.value });
              }}
              value={newUser.password}
            />
          </div>

          <button
            className="btn"
            type="submit"
            onClick={createUser}
            onKeyPress={(event) => {
              event.key === "Enter" && createUser();
            }}
            style={{ margin: "20px 0 0 0" }}
          >
            Create!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
