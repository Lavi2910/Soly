import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { solyTheme } from '@soly/ui';
import { useAuthStore } from '@soly/shared';
import { useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout/AppLayout';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import { HomePage } from './pages/customer/HomePage';
import RegisterPage from './pages/auth/RegisterPage/RegisterPage';
import WelcomePage from './pages/auth/WelcomePage/WelcomePage';
import { PublicRoute } from './components/layout/PublicRoute';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/appointments" element={<div>Appointments</div>} />
            <Route path="/businesses" element={<div>Businesses</div>} />
            <Route path="/search" element={<div>Search</div>} />
            <Route path="/provider" element={<div>Provider Dashboard</div>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
