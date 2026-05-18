export interface Business {
  id: string;
  name: string;
  phoneNumber: string;
  description: string;
  address: string;
  logo: string | null;
  instagram: string | null;
  tiktok: string | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}
