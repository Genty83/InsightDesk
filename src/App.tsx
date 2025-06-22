
import { ConfigProvider } from 'antd';
import MainLayout from './components/layout/MainLayout';
import { darkTheme } from './config/theme';

function App() {
  return (
    <ConfigProvider theme={darkTheme}>
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;