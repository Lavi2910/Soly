import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import solyTheme from '@/styles/theme';
import Home from '@/pages/Home';

function App() {
  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
