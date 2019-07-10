import axios from "axios";

const api = axios.create({
  headers: {
    "Time-Zone": "America/Sao_Paulo",
    Accept: "application/vnd.github.cloak-preview"
  },
  baseURL: "https://api.github.com"
});

export default api;
