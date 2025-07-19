// store/authStore.ts
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
  login: (token: string, username: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  username: null,

  login: (token: string, username: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username || "");
    set({ token, username, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    set({ token: null, username: null, isAuthenticated: false });
  },

  initialize: () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      set({ token, username, isAuthenticated: true });
    }
  },
}));
