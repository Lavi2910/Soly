import api from './api';

export async function getBusinesses() {
  const response = await api.get('/businesses');
  return response.data;
}

export async function getBusiness(id: string) {
  const response = await api.get('/businesses/' + id);
  return response.data;
}
