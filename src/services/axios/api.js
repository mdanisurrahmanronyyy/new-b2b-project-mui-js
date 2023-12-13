import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = `${process.env.SERVER}`;

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = `Bearer ${session?.user?.token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      signOut();

    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
