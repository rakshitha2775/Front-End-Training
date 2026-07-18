import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

api.interceptors.request.use((config) => {
  console.log("API Request:", config.baseURL + config.url);
  return config;
});

export default api;