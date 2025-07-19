import axios from "axios";

const API_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: API_URL });

export const register = async (data: User) => {
  return await axiosInstance.post("api/register", data);
};

export const login = async (data: LoginDto) => {
  return await axiosInstance.post("api/login", data);
};
