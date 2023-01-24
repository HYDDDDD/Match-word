import "./App.css";
import Register from "./component/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
    
    // <Routes>
    //   {/* path="/" หน้าแรกที่ขึ้นมาแสดง */}
    //   <Route path="/" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
  );
}

export default App;
