import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';
import { colors } from '@soly/shared';

export type SolyButtonVariant = 'outlined' | 'gradient' | 'white';

export const getButtonStyles = (
  token: GlobalToken,
): Record<SolyButtonVariant, CSSProperties> => ({
  white: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorBorder,
    boxShadow: token.boxShadow,
    borderRadius: '15px',
  },
  outlined: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: token.colorPrimaryBg,
    borderColor: token.colorPrimary,
    boxShadow: token.boxShadow,
    borderRadius: '15px',
  },
  gradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.gradientPrimary,
    border: 'none',
    boxShadow: token.boxShadowSecondary,
    color: token.colorBgContainer,
    borderRadius: '15px',
  },
});
