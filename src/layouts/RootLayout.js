import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router';


function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content" style={{ width: isSidebarOpen ? '80%' : '100%' }}>
        <img src='/images/top.png' alt='top' className="top" />
        <img src='/images/bottomright.png' alt='right' className="bottomright" />
        <img src='/images/bottomleft.png' alt='left' className="bottomleft" />
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
