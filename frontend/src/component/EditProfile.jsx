import React from "react";

function EditProfile({ currentUser }) {
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
            <input type="text" />
            <label>E-mail :</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
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
