import { useState } from 'react';
import { register } from '@/services/authServices';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (!phone || !password || !firstName || !lastName || !confirmPassword) {
      setError('נא למלא את כל השדות');
      return;
    }
    if (password !== confirmPassword) {
      setError('הסיסמאות אינן תואמות');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await register(firstName, lastName, phone, password);
      navigate('/welcome');
    } catch {
      setError('מספר טלפון קיים במערכת');
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};
