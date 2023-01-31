import "./App.css";
//import VocabularyTreasury from "./component/VocabularyTreasury/VocabularyTreasury";
import Category from "./component/Category/Category";
//import Register from "./component/Register";
//import { Routes, Route } from "react-router-dom";

function App() {
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
