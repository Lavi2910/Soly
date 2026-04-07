import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';
import { colors } from '@soly/shared';

export type SolyCardVariant = 'outlined' | 'white' | 'gradient';

export const getVariantStyles = (
  token: GlobalToken,
): Record<SolyCardVariant, CSSProperties> => ({
  white: {
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorBorder,
    boxShadow: token.boxShadow,
  },
  outlined: {
    backgroundColor: token.colorPrimaryBg,
    borderColor: token.colorPrimary,
    boxShadow: token.boxShadow,
  },
  gradient: {
    background: colors.gradientPrimary,
    boxShadow: token.boxShadow,
    color: token.colorBgContainer,
  },
});
