import axios from 'axios';

const api = axios.create({
  headers: {
    Accept: 'application/vnd.github.cloak-preview',
  },
  baseURL: 'https://api.github.com',
});

export default api;
