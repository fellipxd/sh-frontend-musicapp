import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
