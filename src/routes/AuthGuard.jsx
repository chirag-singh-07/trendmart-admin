import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const AuthGuard = () => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();
  // console.log("isauth", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect authenticated users away from home ("/") to "/dashboard"
  if (location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />; // Render protected routes
};

export default AuthGuard;
