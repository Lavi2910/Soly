import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { solyTheme } from '@soly/ui';
import { useAuthStore } from '@soly/shared';
import { useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout/AppLayout';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import { HomePage } from './pages/customer/HomePage';

function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
