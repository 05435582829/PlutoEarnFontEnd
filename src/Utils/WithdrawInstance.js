import axios from "axios";

const baseURL = "https://apple.egodeo.org";

const apple = axios.create({
  baseURL,
});

apple.interceptors.request.use((config) => {
  const token = localStorage.getItem("eta");
  config.params = config.params || {};
  config.headers = config.headers || {};
  config.headers["x-token"] = token;
  return config;
});

export default apple;
