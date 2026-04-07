import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export type TagVariant = 'status' | 'highlight' | 'default';

export const getVariantStyles = (
  token: GlobalToken,
): Record<TagVariant, CSSProperties> => ({
  status: {
    backgroundColor: token.colorSuccessBg,
    color: token.colorSuccess,
    borderColor: token.colorSuccess,
    borderRadius: 20,
  },
  highlight: {
    backgroundColor: token.colorPrimaryBg,
    color: token.colorPrimary,
    borderColor: token.colorPrimary,
    borderRadius: 20,
  },
  default: {
    backgroundColor: token.colorFillTertiary,
    color: token.colorTextSecondary,
    borderColor: token.colorBorder,
    borderRadius: 20,
  },
});
