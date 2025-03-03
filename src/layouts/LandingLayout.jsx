import LandiingFooter from "@/components/landing/LandiingFooter";
import LandingHeader from "@/components/landing/LandingHeader";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <LandiingFooter />
    </div>
  );
};

export default LandingLayout;
