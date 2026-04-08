import api from './api';
import useAuthStore from '@soly/shared/src/stores/authStore';

export async function login(
  phoneNumber: string,
  password: string,
  role: string,
) {
  const response = await api.post('/auth/login', {
    phoneNumber,
    password,
    role,
  });
  localStorage.setItem('token', response.data.token);
  useAuthStore.getState().setAuth(response.data.token, response.data.user);
  return response.data;
}

export async function register(
  name: string,
  phoneNumber: string,
  password: string,
  role: string,
) {
  const response = await api.post('/auth/register', {
    name,
    phoneNumber,
    password,
    role,
  });
  localStorage.setItem('token', response.data.token);
  useAuthStore.getState().setAuth(response.data.token, response.data.user);
  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
  useAuthStore.getState().logout();
}
