import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import SideBar from "./Sidebar";
import Progress from "./Progress";
import Chatroom from "./Chatroom";
import Settings from "./Settings";
import Company from "./Company";
const Dashboard = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <SideBar>
        <Routes>
          <Route path="/progress" element={<Progress />} />

          <Route path="/chatRoom" element={<Chatroom />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </SideBar>
      <div>
        <button className="logout" onClick={handleClick}>
          Logout
        </button>
      </div>
      ;
    </div>
  );
};

export default Dashboard;
