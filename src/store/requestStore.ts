import { create } from 'zustand';

interface RequestStoreState {
    requests: number;
    updateRequests: (increase?: boolean) => void;
}

export const useRequestStore = create<RequestStoreState>((set, get) => ({
    requests: 0,
    updateRequests: (increase = true) => {
        set((state) => {
            const newRequests = state.requests + (increase ? 1 : -1);
            const clampedRequests = Math.max(newRequests, 0);
            return { requests: clampedRequests };
        });
    },
}));

export const requestStore = useRequestStore.getState();