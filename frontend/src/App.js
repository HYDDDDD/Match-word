import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./component/useLocalStorage";
import "./App.css";
<<<<<<< HEAD
//import VocabularyTreasury from "./component/VocabularyTreasury/VocabularyTreasury";
import Category from "./component/Category/Category";
//import Register from "./component/Register";
//import { Routes, Route } from "react-router-dom";
=======
import Register from "./component/Register";
import Login from "./component/Login";
import EditProfile from "./component/EditProfile";
>>>>>>> 0e74e705fb39bb710bf69484e0d1b1be5b0e2af7

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
<<<<<<< HEAD
    <div className="App">
      <Category/>
      {/* <VocabularyTreasury /> */}
    </div>
    
    // <Routes>
    //   {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
    //   <Route path="/" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
=======
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
>>>>>>> 0e74e705fb39bb710bf69484e0d1b1be5b0e2af7
  );
}

export default App;
