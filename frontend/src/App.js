import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./component/useLocalStorage";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import EditProfile from "./component/EditProfile";
import Category from "./component/Category/Category";
import VocabularyTreasury from "./component/VocabularyTreasury/VocabularyTreasury";
import Prepare from "./component/Prepare/Prepare";

function App() {
  const [users, setUsers] = useState([]);
  const [setSaveData, clearLocalStorage] = useLocalStorage("Current User");
  const [currentUser, setCurrentUser] = useState([]);
<<<<<<< HEAD
  const [seletedTreasury, setSeletedTreasury] = useState([]);
=======
  const [selectedTreasury, setSelectedTreasury] = useState([]);
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81

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
    <Routes>
      {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
      <Route
        path="/"
<<<<<<< HEAD
        // element={<Login users={users} setCurrentUser={setCurrentUser} />}
        element={
          <Category
            currentUser={currentUser}
            setSeletedTreasury={setSeletedTreasury}
          />
        }
=======
        element={<Login users={users} setCurrentUser={setCurrentUser} />}
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
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
<<<<<<< HEAD
      {/* <Route
=======
      <Route
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
        path="/category"
        element={
          <Category
            currentUser={currentUser}
<<<<<<< HEAD
            setSeletedTreasury={setSeletedTreasury}
          />
        }
      /> */}
=======
            setSelectedTreasury={setSelectedTreasury}
          />
        }
      />
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
      <Route
        path="/vocabularyTreasury"
        element={<VocabularyTreasury currentUser={currentUser} />}
      />
      <Route
        path="/prepare"
        element={
          <Prepare
            currentUser={currentUser}
<<<<<<< HEAD
            seletedTreasury={seletedTreasury}
=======
            selectedTreasury={selectedTreasury}
>>>>>>> 7cf0c02fd8f3abe7184f7bc35fd9f48104515c81
          />
        }
      />
    </Routes>
  );
}

export default App;
