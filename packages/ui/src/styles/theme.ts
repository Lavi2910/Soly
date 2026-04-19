import type { ThemeConfig } from 'antd';
import { colors } from '@soly/shared';

const solyTheme: ThemeConfig = {
  cssVar: {},
  token: {
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.error,
    colorBgContainer: colors.white,
    colorBgLayout: colors.background,
    colorBorder: colors.border,
    colorText: colors.text,
    colorTextSecondary: colors.textLight,
    fontFamily: 'Inter, system-ui, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 8px 40px rgba(0, 0, 0, 0.28)',
    boxShadowTertiary:
      '0 8px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.10)',
  },
};

export default solyTheme;
