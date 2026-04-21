export type Status = 'CONFIRMED' | 'COMPLETED' | 'CANCELED' | 'NOSHOW';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar?: string;
}
