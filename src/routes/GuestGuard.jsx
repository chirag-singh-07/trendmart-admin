import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default GuestGuard;
