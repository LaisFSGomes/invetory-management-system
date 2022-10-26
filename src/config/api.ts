import axios from "axios";

export const apiStore = axios.create({
  baseURL: "https://fakestoreapi.com",
});