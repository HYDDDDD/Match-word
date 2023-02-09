import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Register() {
  const [users, setUsers] = useState([]);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const createUser = (event) => {
  //   event.preventDefault(); //when submitting and refreshing your page so when it save data.

  //   setUsername("");
  //   setPassword("");
  //   setNewUser({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // };

  const createUser = (event) => {
    event.preventDefault(); //when submitting and refreshing your page so when it save data.

    let url = "http://127.0.0.1:8000/users/";

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        setNewUser({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/users/");
      const users_data = await response.json();
      setUsers(users_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // console.log(users);
  // users.map((user) => console.log(user.username));

  return (
    <form>
      <h1>Register</h1>
      <div className="inputLogin">
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
