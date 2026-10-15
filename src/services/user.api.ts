import api from "./api";
import { ENDPOINTS } from "./endpoints";

export const fetchUsers = async () => {
  const response = await api.get(ENDPOINTS.USERS.LIST);
  return response.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get(ENDPOINTS.USERS.DETAIL(id));
  return response.data;
};

export const createPost = async (data: any) => {
  const response = await api.post(ENDPOINTS.POSTS.CREATE, data);
  return response.data;
};

export const updatePost = async (id: number, data: any) => {
  const response = await api.put(ENDPOINTS.POSTS.UPDATE(id), data);
  return response.data;
};

export const deletePost = async (id: number) => {
  const response = await api.delete(ENDPOINTS.POSTS.DELETE(id));
  return response.data;
};
