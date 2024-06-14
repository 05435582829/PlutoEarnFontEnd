import axios from "axios";

const baseURL = "https://plutoearn.egoras.com";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("eta");
  config.params = config.params || {};
  config.headers = config.headers || {};
  config.headers["x-token"] = token;
  return config;
});

export default api;
