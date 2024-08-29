import { API_URL } from "@/constants/api";
import axios from "axios";
import { reset, setToken } from "@/store/slices/auth-slice";
import { reset as resetCart } from "@/store/slices/cart-slice";
import { store } from "@/store";

const axiosClient = axios.create({
  baseURL: API_URL ?? "http://localhost:4000",
  withCredentials: true,
});

const axiosPrivate = axios.create({
  baseURL: API_URL ?? "http://localhost:4000",
  timeout: 5000,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token.accessToken;

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
        const response = await axiosClient.post("/refresh-token", {
          refreshToken: store.getState().auth.token.refreshToken,
        });


        const token = {
          refreshToken: store.getState().auth.token.refreshToken,
          accessToken: response.data.data
        }

        store.dispatch(setToken(token));
        return axiosPrivate(originalConfig);
      } catch (refreshError) {
        store.dispatch(reset());
        store.dispatch(resetCart())
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosClient, axiosPrivate };
