import axios from 'axios';
import { AuthStorage } from '../providers/auth/auth-storage';

axios.interceptors.request.use(function (config) {
  const authStorage = AuthStorage.getInstance();
  const accessToken = authStorage.getAccessToken();
  if (accessToken) {
    const headers = {...config.headers, 'Authorization': `Bearer ${authStorage.getAccessToken()}`};
    config.headers = headers;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export const httpClient = axios;