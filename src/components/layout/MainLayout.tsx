import React from 'react';
import { theme } from 'antd';
import GridAreas from './components/GridAreas';

// Import internal components
import Titlebar from '../titlebar/Titlebar';

const MainLayout: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <GridAreas
      areas={[
        'titlebar titlebar',
        'sidebar ribbon',
        'sidebar splitter',
        'footer  footer',
      ]}
      columns="auto 1fr"
      rows="auto auto 1fr auto"
      gap="0"
      height="100vh"
      width="100vw"
      style={{ backgroundColor: token.colorBgBase, padding: "3px", }}
    >
      <Titlebar />
    </GridAreas>
  );
};

export default MainLayout;