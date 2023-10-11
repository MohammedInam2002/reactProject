import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";
import ListEmployee from "./pages/ListEmployee";
import MenuBar from "./component/MenuBar";
function App() {
  return (
    <div>
      <MenuBar />
      <div className="container mt-5">
        <div>
          <Routes>
            <Route path="/create-employee" element={<CreateEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/employee-list" element={<ListEmployee />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
