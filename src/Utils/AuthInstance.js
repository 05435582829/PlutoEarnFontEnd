import axios from "axios";

const baseURL = "https://auth.egodeo.org";

const auth = axios.create({
  baseURL,
});

auth.interceptors.request.use((config) => {
  const token = localStorage.getItem("eta");
  config.params = config.params || {};
  config.headers = config.headers || {};
  config.headers["x-token"] = token;
  return config;
});

export default auth;
