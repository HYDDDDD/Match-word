import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function EditProfile({ currentUser }) {
  const [updateData, setUpdateData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // console.log(updateData);

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
            />
            <label>E-mail :</label>
            <input
              type="email"
              onChange={(event) => {
                setUpdateData({ ...updateData, email: event.target.value });
              }}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(event) => {
                setUpdateData({ ...updateData, password: event.target.value });
              }}
            />
            <label>Password***</label>
            <input type="password" />
          </div>
          <button type="submit">DONE</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
