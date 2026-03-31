import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import solyTheme from '@/styles/theme';
import Home from '@/pages/Home';

function App() {
  return (
    <ConfigProvider theme={solyTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
