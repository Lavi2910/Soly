import api from './api';

export async function login(phoneNumber: string, password: string) {
  const response = await api.post('/auth/login', { phoneNumber, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
}

export async function register(
  name: string,
  phoneNumber: string,
  password: string,
) {
  const response = await api.post('/auth/register', {
    name,
    phoneNumber,
    password,
  });
  localStorage.setItem('token', response.data.token);
  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
}
