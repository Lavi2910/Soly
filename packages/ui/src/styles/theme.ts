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
    boxShadowSecondary: '0 0 32px rgba(0, 0, 0, 0.12)',
    boxShadowTertiary:
      '0 6px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.08)',
  },
};

export default solyTheme;
