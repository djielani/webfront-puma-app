import axios from 'axios';
import { User } from '../types/users';


// export const authenticateUser = (email: string, password: string): User => {
//   const user = mockUsers.find(u => u.email === email && u.password === password);
//   if (!user) throw new Error('Invalid credentials');

//   // Remove password before returning user data
//   const { password: _, ...userWithoutPassword } = user;
//   return userWithoutPassword;
// };

export const authenticateUser = async (username: string, password: string): Promise<User> => {
    try {
        const response = await axios.post<User>(`${process.env.REACT_APP_API_URL}/login`, {
            "username": username,
            "password": password,
        });
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials');
    }
};
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