import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router";
import MusicPlayer from "../components/player/AudioPlayer";
import Upload from "../components/Upload";
import AppContext from "../state/context";
import BgImage from "../components/BgImage";

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

  function toggleUpload() {
    setIsOpen(!isOpen);
    console.log("clicked");
  }

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex">
      <div className="root-side">
        <Sidebar />
      </div>
      <div className="root-main relative bg-black p-7">
        <div className="relative flex flex-col w-full h-[100vh]">
          <div>
            <Header toggleUpload={toggleUpload} />
          </div>
          <div className=" overflow-scroll mt-4">
            <Upload toggleUpload={toggleUpload} />
            <div className="overscroll-contain">
              <Outlet />
            </div>
          </div>
          <div className="pb-8">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
