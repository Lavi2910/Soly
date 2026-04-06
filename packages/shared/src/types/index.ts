export type Status = 'CONFIRMED' | 'COMPLETED' | 'CANCELED' | 'NOSHOW';
export type Role = 'CUSTOMER' | 'PROVIDER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  role: Role;
}
