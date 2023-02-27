import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import PictureUser from "../../Picture/pictureUser.png";
import Menu from "../Menu/Menu";

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

    console.log(updateData);

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
        // refreshPage();
        navigate("/setting");
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

  // const refreshPage = () => {
  //   window.location.reload(false);
  // };

  return (
    <div className="backgroundEditProfile">
      <div id="tabMenu">
        <Menu />
      </div>
      <div className="boxEdit">
        <div className="containerEdit">
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>ชื่อผู้ใช้งาน</h1>
          </div>
          <div className="edit-data">
            <div className="picture-user">
              <div>
                <img src={PictureUser} alt="" />
              </div>
              <div>
                <p>Edit</p>
              </div>
            </div>
            <div className="formEdit">
              <form>
                <div className="formEditProfile">
                  <div className="list-edit-data">
                    <label>Name :</label>
                    <input
                      className="inputName"
                      type="text"
                      onChange={(event) => {
                        setUpdateData({
                          ...updateData,
                          username: event.target.value,
                        });
                      }}
                      value={updateData.username}
                    />
                  </div>
                  <div className="list-edit-data">
                    <label>E-mail :</label>
                    <input
                      type="email"
                      onChange={(event) => {
                        setUpdateData({
                          ...updateData,
                          email: event.target.value,
                        });
                      }}
                      value={updateData.email}
                    />
                  </div>

                  <div className="list-edit-data">
                    <label>Password :</label>
                    <input
                      type="password"
                      onChange={(event) => {
                        setUpdateData({
                          ...updateData,
                          password: event.target.value,
                        });
                      }}
                      value={updateData.password}
                    />
                  </div>
                  <div className="list-edit-data">
                    <label>Password*** : </label>
                    <input
                      type="password"
                      onChange={(event) => setPasswordAgain(event.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="btnEditForm">
            <div>
              <button
                className="btnEdit"
                type="submit"
                onClick={() => navigate("/setting")}
              >
                Cancle
              </button>
            </div>
            <div>
              <button
                className="btnEdit"
                type="submit"
                onClick={update}
                onKeyPress={(event) => {
                  event.key === "Enter" && update();
                }}
              >
                DONE
              </button>
            </div>
          </div>
        </div>

        {/* <button type="button" onClick={() => navigate("/category")}>
          คลัง
        </button> */}
      </div>
    </div>
  );
}

export default EditProfile;
