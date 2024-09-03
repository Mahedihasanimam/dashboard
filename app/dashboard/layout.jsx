

import React from "react";
import Sidebar from "../components/dashboard/share/Sidebar";
import DashboardHeader from "../components/dashboard/share/DashboardHeader";

const layout = ({ children }) => {
  return (
    <div className="bg-[#404141]">
      <DashboardHeader />
      <div className=" flex">
        <div className="w-80">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default layout;
