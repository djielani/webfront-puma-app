import axios, { AxiosInstance, AxiosResponse } from 'axios';

// apiService.ts

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajout d’un intercepteur pour inclure le token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  console.log('Token ajouté à la requête:', token);
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Méthodes génériques typées
export const get = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.get(url);
  return response.data;
};

export const post = async <T, U>(url: string, data: U): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.post(url, data);
  return response.data;
};

export const put = async <T, U>(url: string, data: U): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.put(url, data);
  return response.data;
};

export const del = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.delete(url);
  return response.data;
};

export default apiClient;