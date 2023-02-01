import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./component/useLocalStorage";
import "./App.css";
//import VocabularyTreasury from "./component/VocabularyTreasury/VocabularyTreasury";
import Category from "./component/Category/Category";
//import Register from "./component/Register";
//import { Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [setSaveData, clearLocalStorage] = useLocalStorage("Current User");
  const [currentUser, setCurrentUser] = useState([]);

  const getLocalStorage = async () => {
    try {
      const local = await localStorage.getItem("Current User");

      if (local) {
        await setCurrentUser(JSON.parse(local));
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
    // clearLocalStorage();
    getAllUsers();
    getLocalStorage();
  }, []);

  useEffect(() => {
    setSaveData(currentUser);
  }, [setSaveData]);

  console.log(users);

  return (
    <div className="App">
      <Category />
      {/* <VocabularyTreasury /> */}
    </div>

    // <Routes>
    //   {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
    //   <Route path="/" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
  );
}

export default App;
