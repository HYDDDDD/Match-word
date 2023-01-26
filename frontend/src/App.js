import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";
import EditProfile from "./component/EditProfile";

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  return (
    // <div className="App">
    //   {/* <Register /> */}
    //   <Login setCurrentUser={setCurrentUser} />
    // </div>

    <Routes>
      {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
      <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/editProfile"
        element={<EditProfile currentUser={currentUser} />}
      />
    </Routes>
  );
}

export default App;
