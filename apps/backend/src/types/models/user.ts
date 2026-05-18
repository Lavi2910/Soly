export interface User {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string | null;
  worksAtId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type PublicUser = Omit<
  User,
  'password' | 'worksAtId' | 'createdAt' | 'updatedAt'
>;
