/* eslint-disable prettier/prettier */
import axios from "axios";

export const BASE_URL = {
  DEV: "http://localhost:8080/",
};

export const basicApi = axios.create({
  baseURL: `${BASE_URL.DEV}`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
