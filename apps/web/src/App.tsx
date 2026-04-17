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
function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/provider" element={<div>Provider Dashboard</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
