import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar";

export const AppLayout = () => {
  return (
    <div className="flex bg-gray-950 h-screen text-white">
      <Sidebar />
      <div className="py-4 pr-4 overflow-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};
