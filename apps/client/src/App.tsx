import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { solyTheme } from '@soly/ui';
import Home from '@/pages/Home';
import useAuthStore from '@soly/shared/src/stores/authStore';
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
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
