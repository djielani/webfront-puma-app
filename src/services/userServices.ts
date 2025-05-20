import { get, post, put, del } from './apiService';
import { User } from '../types/users';

// Récupérer tous les utilisateurs
export const getUsers = async () => {
    return await get<any>('/users');
};

// Récupérer un utilisateur par ID
export const getUserById = async (id: string): Promise<User> => {
    return await get<User>(`/users/${id}`);
};

// Créer un nouvel utilisateur
export const createUser = async (userData: Partial<User>): Promise<User> => {
    return await post<User, Partial<User>>('/users', userData);
};

// Mettre à jour un utilisateur
export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
    return await put<User, Partial<User>>(`/users/${id}`, userData);
};

// Supprimer un utilisateur
export const deleteUser = async (id: string): Promise<void> => {
    await del<void>(`/users/${id}`);
};
