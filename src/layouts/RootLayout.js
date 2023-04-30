import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router";
import MusicPlayer from "../components/player/AudioPlayer";
import Upload from "../components/Upload";
import AppContext from "../state/context";

function RootLayout() {
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useContext(AppContext);

  useEffect(() => {
    const loggedInFromSession = sessionStorage.getItem("sessionId");
    if (!loggedInFromSession) {
      navigate("/login");
    }
    console.log(loggedInFromSession);
  }, [navigate]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function toggleUpload(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log("clicked");
  }

  return (
    <div className="dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className="main-content"
        style={{ width: isSidebarOpen ? "80%" : "100%" }}
      >
        <img src="/images/top.png" alt="top" className="top" />
        <img
          src="/images/bottomright.png"
          alt="right"
          className="bottomright"
        />
        <img src="/images/bottomleft.png" alt="left" className="bottomleft" />
        <Header toggleUpload={toggleUpload} />
        <Upload
          className={isOpen ? "active" : ""}
          toggleUpload={toggleUpload}
        />
        <Outlet />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default RootLayout;
