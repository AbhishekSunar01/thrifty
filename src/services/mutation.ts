import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "./api";
import { useAuthStore } from "@/store/authStore";

export function useRegister() {
  return useMutation({
    mutationFn: (data: User) => register(data),
  });
}

export function useLogin() {
  const auth = useAuthStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const token = res.data?.data?.accessToken;
      const username = res.data?.data?.username;

      if (token) {
        auth.login(token, username);
        console.log("Login successful");
      }
    },
    onError: (err) => {
      console.error("Login failed:", err);
    },
  });
}
