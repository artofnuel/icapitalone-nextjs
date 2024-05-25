import api from "@/lib/api";
import { type User ,type Wallet} from "@/interfaces";
import { create } from "zustand";
import { toast } from 'react-toastify';
import { useMainStore } from ".";


interface AccountStoreState {
    user: User | null;
    wallet: Wallet | null;
    register: (user: User) => Promise<Boolean>;
    login: (credentials: { email: string; password: string | null }) => Promise<Boolean>;
    setUser: (user: User | null) => void;
    logout: () => void;
    fetchProfile: () => Promise<void>;
    fetchWalletBalance: () => Promise<void>;
    sendResetCode: (email: string) => Promise<Boolean>;
    verifyResetCode: (code: string) => Promise<Boolean>;
    resetPassword: (enail: string, password: string) => Promise<Boolean>;
}

export const useAccountStore = create<AccountStoreState>((set) => ({
    wallet: null,
    user: null,
    setUser: (user) => set({ user }),

    logout: () => set((state) => {
        localStorage.clear();
        useMainStore.getState().checkAuth();
        return { ...state, user: null }
    }),
    register: async (user) => {
        try {
            await api.post("auth/signup", user);
            toast.success("Account Created Successfully");
            await useAccountStore.getState().login({ email: user.email, password: user.password })
            return true;
        } catch (error) {
            console.error("Register failed", error);
            return false;
        }
    },
    login: async ({ email, password }) => {
        try {
            const response = await api.post("auth/login", { email, password });
            const data = response.data.data;
            set({ user: {...data, id: data._id} });
            useMainStore.getState().setAuthData(data.token, data._id);
            toast.success("User Logged In Successfully");
            return true;
        } catch (error) {
            console.error("Login failed", error);
            return false
        }
    },
    fetchProfile: async () => {
        try {
            useMainStore.getState().checkAuth();
            if (useMainStore.getState().isAuthenticated) {
                const response = await api.get(`users/profile/${useMainStore.getState().id}`);
                set({ user: response.data.data });
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    },
    fetchWalletBalance: async () => {
        try {
            useMainStore.getState().checkAuth();
            if (useMainStore.getState().isAuthenticated) {
                const response = await api.get('deposit/balance', {
                    params:{
                        _id:useMainStore.getState().id
                    }
                    }
                );
                const data: Object<string, any> = response.data.data;
                set({ ...useAccountStore.getState(),wallet:{
                    id:data._id,
                    walletId:data.walletId,
                    balance:data.balance
                } })
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    },
    sendResetCode: async (email) => {
        try {
            await api.post("auth/forgot-password", { email });
            return true;
        } catch (error) {
            // console.error("Login failed", error);
            return false;
        }
    },
    verifyResetCode: async (code) => {
        try {
            await api.post("auth/verify-reset-code", {
                verificationCode: code
            });
            return true;
        } catch (error) {
            // console.error("Login failed", error);
            return false;
        }
    },
    resetPassword: async (email, password) => {
        try {
            await api.patch("auth/change-password", {
                email, newPassword: password
            });
            toast.success("Password Changed Successfully");
            return true;
        } catch (error) {
            console.error("Login failed", error);
            return false;
        }
    },
}));
