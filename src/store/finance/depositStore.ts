// src/store/index.ts

import api from "@/lib/api";
import { create } from "zustand";

// Define the types for the user and the store state
interface Deposit {
    id: string;
    amount: string;
    date?: string;
    type?: string;
    // Add other user properties as needed
}

interface DepositStoreState {
    deposits: Array<Deposit>;
    makePayment: (payload: Deposit) => void;
}

export const useDepositStore = create<DepositStoreState>((set) => ({
    deposits: [],
    makePayment: async (payload: Deposit) => {
        try {
            const response = await api.post("auth/login", payload);
            set({ deposits: response.data.data });
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
        }
    },
}));
