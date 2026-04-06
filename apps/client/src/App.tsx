import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { solyTheme } from '@soly/shared';
import Home from '@/pages/Home';
import useAuthStore from '@soly/shared/src/stores/authStore';
import { useEffect } from 'react';

function App() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
