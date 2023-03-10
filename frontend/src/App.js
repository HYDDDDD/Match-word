import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./component/useLocalStorage";
import "./App.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import EditProfile from "./component/Setting/EditProfile";
import Category from "./component/Category/Category";
import VocabularyTreasury from "./component/VocabularyTreasury/VocabularyTreasury";
import Prepare from "./component/Prepare/Prepare";
import EditVocabulary from "./component/EditVocabulary/EditVocabulary";
import Setting from "./component/Setting/Setting";
import Edit from "./component/Setting/Edit";
import Main from "./component/Main";
import History from "./component/History";
import Game from "./component/Game";
import Profile from "./component/Proflie/Profile";
import Category2 from "./component/Category/Category2";

function App() {
  const [users, setUsers] = useState([]);
  // const [getLocalStorage, setSaveData, clearLocalStorage] =
  //   useLocalStorage("Current User");
  const [currentUser, setCurrentUser] = useState([]);
  const [selectedTreasury, setSelectedTreasury] = useState([]);
  const [selectEdit, setSelectEdit] = useState("");

  // console.log(currentUser);

  const getLocalStorageUser = async () => {
    try {
      const local = await localStorage.getItem("Current User");

      // console.log(local);

      if (local) {
        await setCurrentUser(JSON.parse(local));
        return JSON.parse(local);
      }
    } catch (error) {
      return undefined;
    }
  };

  const getLocalStorageTreasury = async () => {
    try {
      const local = await localStorage.getItem("Treasury");

      if (local) {
        await setSelectedTreasury(JSON.parse(local));
        return JSON.parse(local);
      }
    } catch (error) {
      return undefined;
    }
  };

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
    getLocalStorageUser();
    getLocalStorageTreasury();
  }, []);

  // console.log(users);

  return (
    <Routes>
      {/* path="/" ???????????????????????????????????????????????????????????? */}
      <Route
        path="/"
        element={<Login users={users} setCurrentUser={setCurrentUser} />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/editProfile"
        element={
          <EditProfile
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route path="/profile" element={<Profile currentUser={currentUser} />} />
      <Route
        path="/category"
        element={
          <Category
            currentUser={currentUser}
            setSelectedTreasury={setSelectedTreasury}
          />
        }
      />
      <Route
        path="/category2"
        element={
          <Category2
            currentUser={currentUser}
            setSelectedTreasury={setSelectedTreasury}
          />
        }
      />
      <Route
        path="/vocabularyTreasury"
        element={<VocabularyTreasury currentUser={currentUser} />}
      />
      <Route
        path="/prepare"
        element={
          <Prepare
            currentUser={currentUser}
            selectedTreasury={selectedTreasury}
          />
        }
      />
      <Route
        path="/editVocabulary"
        element={
          <EditVocabulary
            currentUser={currentUser}
            selectedTreasury={selectedTreasury}
          />
        }
      />
      <Route path="/setting" element={<Setting />} />
      <Route path="/edit" element={<Edit setSelectEdit={setSelectEdit} />} />
      <Route path="/Main" element={<Main currentUser={currentUser} />} />
      <Route
        path="/Game"
        element={<Game selectedTreasury={selectedTreasury} />}
      />
      <Route
        path="/history"
        element={<History selectedTreasury={selectedTreasury} />}
      />
    </Routes>
  );
}

export default App;
