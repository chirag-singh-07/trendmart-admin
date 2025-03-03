import axios from "axios";
import { create } from "zustand";
import { toast } from "sonner";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/admin";

export const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,

  getAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/product/all-products`);
      set({ products: response.data.data, isLoading: false });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error on getting all products";
      set({ isLoading: false, error: errorMessage });
      toast.error(errorMessage);
    }
  },

  addProduct: async (formData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/product/add`, formData);
      set((state) => ({
        products: [...state.products, response.data.data], // Fixed: Now correctly accessing `state.products`
        isLoading: false,
      }));
      toast.success("Product added successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error on adding a new product";
      set({ isLoading: false, error: errorMessage });
      toast.error(errorMessage);
    }
  },

  updateProduct: async (productId, formData) => {
    set({ isLoading: true, error: null });
    // console.log("pro id ",productId);
    
    try {
      const response = await axios.put(
        `${API_URL}/product/edit/${productId}`,
        formData
      );
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId ? response.data.data : product
        ),
        isLoading: false,
      }));
      toast.success("Product updated successfully!"); // Fixed: Added success toast
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error on updating a product";
      set({ isLoading: false, error: errorMessage });
      toast.error(errorMessage);
    }
  },

  deleteProduct: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/product/delete/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
        isLoading: false,
      }));
      toast.success("Product deleted successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error on deleting a product";
      set({ isLoading: false, error: errorMessage });
      toast.error(errorMessage);
    }
  },
}));
