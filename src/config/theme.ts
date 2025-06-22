import type { ThemeConfig } from 'antd';

const sharedTokens = {
  token: {
    fontSize: 12,
    borderRadius: 6,

    // Spacing scale
    sizeUnit: 4,
    sizeStep: 4,
    sizeXS: 4,
    sizeSM: 8,
    size: 16,
    sizeMD: 24,
    sizeLG: 32,
    sizeXL: 48,

    // Text & status colors
    colorSuccess: 'hsl(160, 65%, 40%)',
    colorWarning: 'hsl(45, 100%, 50%)',
    colorError: 'hsl(0, 65%, 50%)',
    colorInfo: 'hsl(220, 90%, 55%)',

    colorTextBase: 'hsl(0, 0%, 10%)',
    colorTextSecondary: 'hsl(0, 0%, 45%)',

    // Backgrounds
    colorBgLayout: 'hsl(0, 0%, 96%)',
    colorBgContainer: 'hsl(0, 0%, 100%)',
    colorBgElevated: 'hsl(0, 0%, 99%)',
    colorBgSpotlight: 'hsl(0, 0%, 92%)',

    // Borders & links
    colorBorder: 'hsl(0, 0%, 85%)',
    colorSplit: 'hsl(0, 0%, 90%)',
    colorLink: 'hsl(220, 100%, 55%)',
    colorLinkHover: 'hsl(220, 100%, 45%)',
    colorLinkActive: 'hsl(220, 100%, 60%)',
  },
};

export const lightTheme: ThemeConfig = {
  ...sharedTokens,
  token: {
    ...sharedTokens.token,
    colorPrimary: 'hsl(220, 60%, 50%)',
    colorBgBase: 'hsl(0, 0%, 100%)',
  },
  components: {
    Button: {
      colorPrimaryHover: 'hsl(220, 60%, 42%)',
      controlHeight: 40,
      borderRadius: 4,
    },
    Layout: {
      headerHeight: 60,
      bodyBg: 'hsl(0, 0%, 96%)',
    },
    Input: {
      colorBgContainer: 'hsl(0, 0%, 100%)',
      controlHeight: 38,
    },
    Modal: {
      borderRadiusLG: 10,
    },
    Card: {
      padding: 16,
      borderRadius: 8,
    },
  },
};

export const darkTheme: ThemeConfig = {
  ...sharedTokens,
  token: {
    ...sharedTokens.token,
    colorPrimary: 'hsl(220, 70%, 60%)',
    colorTextBase: 'hsl(0, 0%, 95%)',
    colorTextSecondary: 'hsl(0, 0%, 65%)',
    colorBgBase: 'hsl(0, 0%, 10%)',
    colorBgLayout: 'hsl(0, 0%, 12%)',
    colorBgContainer: 'hsl(0, 0%, 16%)',
    colorBgElevated: 'hsl(0, 0%, 20%)',
    colorBgSpotlight: 'hsl(0, 0%, 25%)',
    colorBorder: 'hsl(0, 0%, 30%)',
    colorSplit: 'hsl(0, 0%, 22%)',
  },
  components: {
    Button: {
      colorPrimaryHover: 'hsl(220, 70%, 45%)',
      controlHeight: 40,
      borderRadius: 4,
    },
    Layout: {
      headerHeight: 60,
      bodyBg: 'hsl(0, 0%, 12%)',
    },
    Input: {
      colorBgContainer: 'hsl(0, 0%, 18%)',
      controlHeight: 38,
    },
    Modal: {
      borderRadiusLG: 10,
    },
    Card: {
      padding: 16,
      borderRadius: 8,
    },
  },
};