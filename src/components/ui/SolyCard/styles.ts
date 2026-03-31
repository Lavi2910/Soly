import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export type SolyCardVariant = 'outlined' | 'white';

export const getVariantStyles = (
  token: GlobalToken,
): Record<SolyCardVariant, CSSProperties> => ({
  white: {
    backgroundColor: token.colorBgContainer,
  },
  outlined: {
    backgroundColor: token.colorPrimaryBg,
    borderColor: token.colorPrimary,
  },
});
