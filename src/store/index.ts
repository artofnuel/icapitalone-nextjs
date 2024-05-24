// store/mainStore.ts
import { create } from 'zustand';

interface MainStoreState {
  isAuthenticated: boolean;
  checkAuth: () => void;
}

export const useMainStore = create<MainStoreState>((set) => ({
  isAuthenticated: false,
  checkAuth: () => {
    set((state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        return { ...state, isAuthenticated: !!token };
      }
      return state;
    });
  },
}));
