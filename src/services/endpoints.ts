export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  USERS: {
    LIST: "/users",
    DETAIL: (id: number) => `/users/${id}`,
  },
  POSTS: {
    LIST: "/posts",
    CREATE: "/posts",
    UPDATE: (id: number) => `/posts/${id}`,
    DELETE: (id: number) => `/posts/${id}`,
  },
};
