import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Configure l'instance Axios
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Définir un type générique pour les réponses
type ApiResponse<T> = T;

// Exemple de méthode GET
export const fetchData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};

// Exemple de méthode POST
export const postData = async <T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi des données:', error);
    throw error;
  }
};

export default apiClient;