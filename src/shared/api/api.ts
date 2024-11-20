import axios from "axios";
import { API_BASE_URL } from "../constants";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

api.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
