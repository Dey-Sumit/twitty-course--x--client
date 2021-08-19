import axios from "axios";
console.log("NEXT_PUBLIC_API_BASE_ENDPOINT", process.env.NEXT_PUBLIC_API_BASE_ENDPOINT);

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_ENDPOINT,
  withCredentials: true,
});

export default apiClient;
