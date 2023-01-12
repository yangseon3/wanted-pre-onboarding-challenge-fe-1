/* eslint-disable prettier/prettier */
import axios from "axios";

export const BASE_URL = {
  DEV: "http://localhost:8080/",
};

export const basicApi = axios.create({
  baseURL: `${BASE_URL.DEV}`,
  timeout: 5,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});
