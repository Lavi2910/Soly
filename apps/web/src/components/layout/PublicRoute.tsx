import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@soly/shared';

export const PublicRoute = () => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/discovery" replace /> : <Outlet />;
};
