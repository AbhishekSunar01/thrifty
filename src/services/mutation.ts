import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "./api";

export function useRegister() {
  return useMutation({
    mutationFn: (data: User) => register(data),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginDto) => login(data),
  });
}
