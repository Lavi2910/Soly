import useAuthStore from '@soly/shared/src/stores/authStore';
import { useEffect } from 'react';

const App = () => {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Soly Provider</h1>
    </div>
  );
};

export default App;
