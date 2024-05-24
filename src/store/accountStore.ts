import api from "@/lib/api";
import { type User } from "@/interfaces";
import { create } from "zustand";
import { toast } from 'react-toastify';
import { useMainStore } from ".";


interface AccountStoreState {
    user: User | null;
    register: (user: User) => Promise<Boolean>;
    login: (credentials: { email: string; password: string }) => Promise<Boolean>;
    setUser: (user: User | null) => void;
    logout: () => void;
    fetchProfile: () => Promise<void>;
    forgotPassword: () => Promise<void>;
    resetPassword: () => Promise<void>;
}

export const useAccountStore = create<AccountStoreState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    logout: () => set({ user: null }),
    register: async (user) => {
        try {
            const response = await api.post("auth/signup", user);
            set({ user: response.data.data });
            return true;
        } catch (error) {
            console.error("Register failed", error);
            // Handle login error appropriately
            return false;
        }
    },
    login: async ({ email, password }) => {
        try {
            const response = await api.post("auth/login", { email, password });
            set({ user: response.data.data });
            localStorage.setItem('token', response.data.data.token);
            toast.success("User Logged In Successfully");
            return true;
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
            return false
        }
    },
    fetchProfile: async () => {
        try {
            if (useMainStore.getState().isAuthenticated) {
                const response = await api.get(`users/profile/${useAccountStore.getState().user?.id}`);
                set({ user: response.data.data });
            }
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
        }
    },
    forgotPassword: async () => {
        try {
            const response = await api.get("auth/login");
            set({ user: response.data.data });
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
        }
    },
    resetPassword: async () => {
        try {
            const response = await api.get("auth/login");
            set({ user: response.data.data });
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
        }
    },
}));
