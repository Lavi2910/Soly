import api from './api';

import { type Status } from '@soly/shared/src/types';

export async function bookAppointment(
  time: Date,
  providerId: string,
  serviceId: string,
) {
  const response = await api.post('/appointments', {
    time,
    providerId,
    serviceId,
  });
  return response.data;
}

export async function getAppointments() {
  const response = await api.get('/appointments');
  return response.data;
}

export async function updateAppointment(
  id: string,
  data: { status?: Status; time?: Date },
) {
  const response = await api.put('/appointments/' + id, data);
  return response.data;
}
