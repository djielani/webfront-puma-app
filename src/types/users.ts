export type UserRole = 'admin' | 'vendeur' | 'client' | 'visiteur';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  // role: UserRole;
  role: string;
}