import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { solyTheme } from '@soly/ui';
import { HomePage } from '@/pages/customer/HomePage';
import { useAuthStore } from '@soly/shared';
import { useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout/AppLayout';

function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
