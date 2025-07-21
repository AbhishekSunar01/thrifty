import axios from "axios";

const API_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // safer than accessing Zustand directly
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (data: User) => {
  return await axiosInstance.post("api/register", data);
};

export const login = async (data: LoginDto) => {
  return await axiosInstance.post("api/login", data);
};

export const getAllCategories = async () => {
  const response = await axiosInstance.get("api/categories");
  return response.data.data; // Return only the categories array
};

export const getAllClothes = async () => {
  const response = await axiosInstance.get("api/clothes");
  return response.data; // Return only the categories array
};

export const getAddTocart = async (clotheId: string) => {
  const response = await axiosInstance.post(
    `api/cart/add?clotheId=${clotheId}&quantity=1`
  );
  return response.data;
};
