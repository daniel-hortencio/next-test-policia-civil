import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3003",
});

api.interceptors.response.use(
  (onSuccess): AxiosResponse => {
    const { data } = onSuccess;

    return data;
  },
  (onError: AxiosError) => {
    return Promise.reject({
      status: onError.status || 500,
      message: onError.message,
    });
  }
);
