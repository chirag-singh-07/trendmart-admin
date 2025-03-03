import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DeshboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      {/* side bar */}
      <DashboardSidebar
        isSidebarOpen={openSidebar}
        setIsSidebarOpen={setOpenSidebar}
      />
      <div className="flex flex-1 flex-col">
        {/* Admin header */}
        <DashboardHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-background p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DeshboardLayout;
