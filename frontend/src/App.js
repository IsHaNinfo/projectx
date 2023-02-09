import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/pages/Login";
import PasswordChange from "./Components/pages/PasswordChange";
import Register from "./Components/pages/Register";
import Methods from "./Components/pages/Methods";
import EnterCompany from "./Components/pages/EnterCompany";
import Dashboard from "./Components/pages/Dashboard";
import Home from "./Components/pages/Home";

import ForgotPassword from "./Components/pages/ForgotPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/forgotPassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/passwordChange" element={<PasswordChange />} />
          <Route path="/Methods" element={<Methods />} />
          <Route path="/EnterCompany" element={<EnterCompany />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
