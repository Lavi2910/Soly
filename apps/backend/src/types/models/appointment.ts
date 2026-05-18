export type AppointmentStatus = 'PENDING' | 'COMPLETED' | 'CANCELED' | 'NOSHOW';

export interface Appointment {
  id: string;
  customerId: string;
  providerId: string;
  serviceId: string;
  time: Date;
  serviceName: string;
  price: number;
  duration: number;
  status: AppointmentStatus;
  createdAt: Date;
  updatedAt: Date;
}
