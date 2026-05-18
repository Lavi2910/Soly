export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  businessId: string;
  providerIds: string[];
  createdAt: Date;
  updatedAt: Date;
}
