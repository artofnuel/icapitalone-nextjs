import { create } from 'zustand';

interface MainStoreState {
  id: string | null;
  isAuthenticated: boolean;
  checkAuth: () => void;
  setAuthData: (token: string, id: string) => void;
}

export const useMainStore = create<MainStoreState>((set) => ({
  isAuthenticated: false,
  id: null,
  setAuthData: (token, id) => {
    set((state) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('_token', token);
        localStorage.setItem('_access', id);
        return { ...state, id: id, isAuthenticated: !!token };
      }
      return state;
    })
  },
  checkAuth: () => {
    set((state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('_token');
        const id = localStorage.getItem('_access');
        return { ...state, id, isAuthenticated: !!token };
      }
      return state;
    });
  },
}));
