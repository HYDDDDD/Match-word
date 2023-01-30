import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./component/useLocalStorage";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";
import EditProfile from "./component/EditProfile";

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

  return (
    // <div className="App">
    //   {/* <Register /> */}
    //   <Login setCurrentUser={setCurrentUser} />
    // </div>

    <Routes>
      {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
      <Route
        path="/"
        element={<Login users={users} setCurrentUser={setCurrentUser} />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/editProfile"
        element={<EditProfile currentUser={currentUser} />}
      />
    </Routes>
  );
}

export default App;
