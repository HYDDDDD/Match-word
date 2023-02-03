import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordAgain, setPasswordAgain] = useState("");

  const update = (event) => {
    event.preventDefault();

    if (handleValidation() === true) {
      let url = `http://127.0.0.1:8000/users/${currentUser.user_id}`;

      axios.put(url, updateData).then(() => {
        setCurrentUser({
          user_id: currentUser.user_id,
          username: updateData.username,
          email: updateData.email,
        });
        setUpdateData({ username: "", email: "", password: "" });
        setPasswordAgain("");
        refreshPage();
      });
    }
  };

  const handleValidation = () => {
    if ((passwordAgain === updateData.password) === false) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div>
        <div>{currentUser.username}</div>
        <div>Point:</div>
      </div>
      <div>
        <h1>ชื่อผู้ใช้งาน</h1>
        <form>
          <div className="formEditProfile">
            <label>Name :</label>
            <input
              type="text"
              onChange={(event) => {
                setUpdateData({ ...updateData, username: event.target.value });
              }}
              value={updateData.username}
            />
            <label>E-mail :</label>
            <input
              type="email"
              onChange={(event) => {
                setUpdateData({ ...updateData, email: event.target.value });
              }}
              value={updateData.email}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(event) => {
                setUpdateData({ ...updateData, password: event.target.value });
              }}
              value={updateData.password}
            />
            <label>Password***</label>
            <input
              type="password"
              onChange={(event) => setPasswordAgain(event.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={update}
            onKeyPress={(event) => {
              event.key === "Enter" && update();
            }}
          >
            DONE
          </button>
        </form>
        <button type="button" onClick={() => navigate("/category")}>
          คลัง
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
