import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import solyTheme from '@/styles/theme';
import Home from '@/pages/Home';
import { SolyCard } from './components/ui/SolyCard/SolyCard';

function App() {
  return (
    <ConfigProvider theme={solyTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SolyCard></SolyCard>
      <SolyCard variant="outlined"></SolyCard>
      <SolyCard variant="gradient">
        <h1>קבע תור עכשיו</h1>
      </SolyCard>
    </ConfigProvider>
  );
}

export default App;
