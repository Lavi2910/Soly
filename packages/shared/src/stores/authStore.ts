import { create } from 'zustand';
import type { User } from '../types/index';

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  initialize: () => void;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  initialize: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ token, isAuthenticated: true });
    }
  },
  setAuth: (token, user) => set({ token, user, isAuthenticated: true }),
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
