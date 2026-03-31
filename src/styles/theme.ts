import type { ThemeConfig } from 'antd';
import { colors } from '@/constants/colors';

const solyTheme: ThemeConfig = {
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
  },
};

export default solyTheme;
