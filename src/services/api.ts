import axios from "axios";
import { useAuthStore } from "../store/Zustand/authStore";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // replace later
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;

    // Example logic: logout if token invalid
    if (status === 401) {
      useAuthStore.getState().signOut();
    }

    return Promise.reject(error);
  }
);

export default api;
