export type Status = 'CONFIRMED' | 'COMPLETED' | 'CANCELED' | 'NOSHOW';
export type Role = 'CUSTOMER' | 'PROVIDER';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
