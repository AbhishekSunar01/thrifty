import { useQueries, useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllClothes } from "./api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
};

export const useClothes = () => {
  return useQuery({
    queryKey: ["clothes"],
    queryFn: () => getAllClothes(),
  });
};
