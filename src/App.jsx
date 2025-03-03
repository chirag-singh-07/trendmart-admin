import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestGuard from "./routes/GuestGuard";
import DetailLayout from "./layouts/DetailLayout";
import TermsAndServicePage from "./pages/TermsAndServicePage";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import AboutPage from "./pages/AboutPage";
import DataProtectionPolicyPage from "./pages/DataProtectionPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrdersPage from "./pages/OrdersPage";
import DeshboardLayout from "./layouts/DeshboardLayout";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  // console.log("isauth", isAuthenticated);

  useEffect(() => {
    checkAuth();
    // console.log("Checking auth");
  }, [checkAuth]);

  if (isCheckingAuth)
    return (
      <div className="flex items-center justify-center">
        <Loader className="animate-spin text-lg" />
      </div>
    );
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* Auth routes (accessible without authentication) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Dashboard routes (protected by GuestGuard) */}
        <Route element={<GuestGuard />}>
          <Route path="/dashboard" element={<DeshboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            {/* <Route path="settings" element={<SettingsPage />} /> */}
          </Route>
        </Route>

        {/* Other routes */}
        <Route element={<DetailLayout />}>
          <Route path="/terms-of-service" element={<TermsAndServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/data-protection-policy"
            element={<DataProtectionPolicyPage />}
          />
        </Route>

        {/* Catch-All Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
