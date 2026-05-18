import {
  findAppointmentById,
  findAppointmentsByUser,
  createAppointment,
  updateAppointment,
  hasTimeConflict,
} from '../models/appointment.model.js';
import { findServiceById } from '../models/service.model.js';
import { AppError } from '../errors/AppError.js';

export async function create(
  customerId: string,
  data: {
    serviceId: string;
    providerId: string;
    time: string;
  },
) {
  if (!data.serviceId || !data.providerId || !data.time) {
    throw new AppError(400, 'Missing required fields');
  }

  const service = await findServiceById(data.serviceId);
  if (!service) throw new AppError(404, 'Service not found');

  if (!(service.providerIds || []).includes(data.providerId)) {
    throw new AppError(404, 'This provider does not offer this service');
  }

  const newStart = new Date(data.time);
  if (isNaN(newStart.getTime())) throw new AppError(400, 'Invalid date format');

  const conflict = await hasTimeConflict(
    data.providerId,
    newStart,
    service.duration,
  );
  if (conflict)
    throw new AppError(409, 'Provider is not available at this time');

  return createAppointment({
    customerId,
    providerId: data.providerId,
    serviceId: data.serviceId,
    time: newStart,
    serviceName: service.name,
    price: service.price,
    duration: service.duration,
    status: 'PENDING',
  });
}

export async function getByUser(userId: string) {
  return findAppointmentsByUser(userId);
}

export async function update(
  userId: string,
  appointmentId: string,
  data: {
    status?: string;
    time?: string;
  },
) {
  const appointment = await findAppointmentById(appointmentId);
  if (!appointment) throw new AppError(404, 'Appointment not found');

  const isCustomer = appointment.customerId === userId;
  const isProvider = appointment.providerId === userId;

  if (!isCustomer && !isProvider) throw new AppError(403, 'Forbidden');

  if (isCustomer && data.status && data.status !== 'CANCELED') {
    throw new AppError(
      403,
      'Customers can only cancel or reschedule appointments',
    );
  }

  if (
    isProvider &&
    data.status &&
    !['CANCELED', 'COMPLETED', 'NOSHOW'].includes(data.status)
  ) {
    throw new AppError(400, 'Invalid status');
  }

  if (data.time) {
    const newTime = new Date(data.time);
    if (isNaN(newTime.getTime()))
      throw new AppError(400, 'Invalid date format');

    const conflict = await hasTimeConflict(
      appointment.providerId,
      newTime,
      appointment.duration,
      appointmentId,
    );
    if (conflict)
      throw new AppError(409, 'Provider is not available at this time');
  }

  return updateAppointment(appointmentId, {
    ...(data.status && {
      status:
        data.status as import('../types/models/index.js').AppointmentStatus,
    }),
    ...(data.time && { time: new Date(data.time) }),
  });
}
