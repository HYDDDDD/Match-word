import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <form>
      <h1>Register</h1>
      <div className="formRegister">
        <label>Username</label>
        <input
          type="text"
          onChange={(event) => {
            setNewUser({ ...newUser, username: event.target.value });
          }}
          value={newUser.username}
        />

        <label>Email</label>
        <input
          type="text"
          onChange={(event) => {
            setNewUser({ ...newUser, email: event.target.value });
          }}
          value={newUser.email}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            setNewUser({ ...newUser, password: event.target.value });
          }}
          value={newUser.password}
        />
      </div>

      <button
        type="submit"
        onClick={createUser}
        onKeyPress={(event) => {
          event.key === "Enter" && createUser();
        }}
      >
        Go
      </button>
    </form>
  );
}

export default Register;
