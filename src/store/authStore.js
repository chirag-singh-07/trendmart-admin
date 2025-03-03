import { create } from "zustand";
import axios from "axios";
import { toast } from "sonner";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/admin";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isCheckingAuth: true,

  signUp: async (formData, navigate) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/auth/register`, formData);

      set({
        user: response.data.data,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });

      toast.success("Signed up successfully");

      // console.log("Sign-up response:", response.data.data.isVerified);
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error signing up";

      set({
        isLoading: false,
        error: errorMessage,
      });

      toast.error("Uh oh! Something went wrong.", {
        description: errorMessage,
      });

      throw error;
    }
  },

  login: async (formData, navigate) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/auth/login`, formData);

      set({
        user: response.data.data,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });

      toast.success("Logged in successfully");

      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred during login.";

      set({
        isLoading: false,
        error: errorMessage,
      });

      toast.error("Login Failed", {
        description: errorMessage,
      });

      // console.error("Login error:", errorMessage);
    }
  },

  logout: async (toast, navigate) => {
    set({ isLoading: true, error: null });

    try {
      await axios.post(`${API_URL}/auth/logout`);

      set({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      });

      toast.success("Logged out successfully");

      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred during logout.";

      set({
        isLoading: false,
        error: errorMessage,
      });

      toast.error("Logout Failed", {
        description: errorMessage,
      });

      // console.error("Logout error:", errorMessage);
    }
  },
  checkAuth: async () => {
    set({ isLoading: true, error: null, isCheckingAuth: true });
    try {
      const response = await axios.get(`${API_URL}/auth/check-auth`);

      set({
        user: response.data.data,
        isLoading: false,
        isAuthenticated: true,
        error: null,
        isCheckingAuth: false,
      });

      // Optional: add a success toast message for authentication check
      //   console.log("Authentication verified successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred while checking authentication.";

      set({
        isLoading: false,
        error: errorMessage,
        isCheckingAuth: false,
      });

      // console.error("Authentication check error:", errorMessage);
    }
  },
}));
