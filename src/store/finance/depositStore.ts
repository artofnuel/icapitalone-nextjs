// src/store/index.ts

import api from "@/lib/api";
import { create } from "zustand";
import { type Deposit } from "@/interfaces";
import { useMainStore } from "@/store";
import { toast } from "react-toastify";
interface DepositStoreState {
    deposits: Array<Deposit>;
    makePayment: (payload: Deposit) => Promise<Boolean>;
    fetchDeposits: () => void;
}


export const useDepositStore = create<DepositStoreState>((set) => ({
    deposits: [],
    fetchDeposits: async () => {
        try {
            const response = await api.get("deposit/user", { params: { id: useMainStore.getState().id } });
            set({ deposits: response.data.data });
        } catch (error) {

        }
    },
    makePayment: async (payload: Deposit) => {
        try {
            const response = await api.post("deposit", payload, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            useDepositStore.getState().fetchDeposits();
            toast.success("Payment Completed Successfully");
            return true;
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
            return false;
        }
    },
}));
