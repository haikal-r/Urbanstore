import { API_URL } from "@/constants/api";
import axios from "axios";
import { store } from "@/store";
import { reset } from "@/store/slices/auth-slice";

const axiosClient = axios.create({
  baseURL: API_URL ?? "http://localhost:4000",
  withCredentials: true,
});

const axiosPrivate = axios.create({
  baseURL: API_URL ?? "http://localhost:4000",
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      originalConfig.headers = JSON.parse(
        JSON.stringify(originalConfig.headers)
      );

      try {
        const response = await axiosClient.get("/refresh-token");

        const newAccessToken = response.data.data;

        originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosPrivate(originalConfig);
      } catch (refreshError) {
        if (
          refreshError.response?.status === 401 ||
          refreshError.response?.status === 403
        ) {
          store.dispatch(reset());
        }

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosClient, axiosPrivate };
