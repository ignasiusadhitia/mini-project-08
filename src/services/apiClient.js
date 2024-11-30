import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://lumoshive-academy-media-api.vercel.app/api',
});

export default apiClient;
