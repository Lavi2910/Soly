import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/authServices';
import { type Role } from '@soly/shared';

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (phone: string, password: string, role: Role) => {
    if (!phone || !password) {
      setError('נא למלא את כל השדות');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await login(phone, password, role);
      navigate(role === 'CUSTOMER' ? '/home' : '/provider');
    } catch {
      setError('מספר טלפון או סיסמה שגויים');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};
