import axios from "axios";

const baseURL = "https://reward.egodeo.org";

const reward = axios.create({
  baseURL,
});

reward.interceptors.request.use((config) => {
  const token = localStorage.getItem("eta");
  config.params = config.params || {};
  config.headers = config.headers || {};
  config.headers["x-token"] = token;
  return config;
});

export default reward;
