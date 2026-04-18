import api from './api';
import useAuthStore from '@soly/shared/src/stores/authStore';

export async function login(phoneNumber: string, password: string) {
  const response = await api.post('/auth/login', {
    phoneNumber,
    password,
  });
  useAuthStore.getState().setAuth(response.data.token, response.data.user);
  return response.data;
}

export async function register(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
) {
  const response = await api.post('/auth/register', {
    firstName,
    lastName,
    phoneNumber,
    password,
  });
  useAuthStore.getState().setAuth(response.data.token, response.data.user);
  return response.data;
}

export function logout() {
  useAuthStore.getState().logout();
}
