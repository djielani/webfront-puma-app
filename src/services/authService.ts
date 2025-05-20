import { post } from './apiService';
import { User } from '../types/users';

// Authentification d'un utilisateur
export const authenticateUser = async (
    username: string,
    password: string
): Promise<User> => {
    return await post<User, { username: string; password: string }>('/login', {
        username,
        password,
    });
};

// Redirection selon le rôle
export const getDashboardPath = (role: string): string => {
    switch (role) {
        case 'ROLE_ADMIN':
            return '/admin/dashboard';
        case 'ROLE_VENDEUR':
            return '/vendeur/dashboard';
        case 'ROLE_CLIENT':
            return '/client/dashboard';
        default:
            return '/login';
    }
};
