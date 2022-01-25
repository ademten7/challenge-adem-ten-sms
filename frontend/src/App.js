import React from "react";
import UserList from "./components/userList/UserList";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CreateNewUser from "./components/createUser/CreateNewUser";
import EditUser from "./components/editUser/EditUser";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateNewUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
