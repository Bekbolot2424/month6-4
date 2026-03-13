import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuth: !!localStorage.getItem("accessToken"),
    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set({ user, isAuth: true });
    },
    logout: () => {
        localStorage.clear();
        set({ user: null, isAuth: false });
    },
}));