// src/store/index.ts

import api from "@/lib/api";
import { create } from "zustand";

// Define the types for the user and the store state
interface Withdrawal {
    id: string;
    amount: string;
    date?: string;
    type?: string;
    // Add other user properties as needed
}

interface WithdrawalStoreState {
    withdrawals: Array<Withdrawal>;
    makePayment: (withdrawal: Withdrawal) => void;
}

export const useWithdrawalStore = create<WithdrawalStoreState>((set) => ({
    withdrawals: [],
    makePayment: async (withdrawal: Withdrawal) => {
        try {
            const response = await api.post("auth/login", withdrawal);
            set({ withdrawals: response.data.data });
        } catch (error) {
            console.error("Login failed", error);
            // Handle login error appropriately
        }
    },
}));
