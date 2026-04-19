import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export type TagVariant = 'status' | 'highlight' | 'default';

const baseTag: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
};

export const getVariantStyles = (
  token: GlobalToken,
): Record<TagVariant, CSSProperties> => ({
  status: {
    ...baseTag,
    backgroundColor: token.colorSuccessBg,
    color: token.colorSuccess,
    borderColor: token.colorSuccess,
  },
  highlight: {
    ...baseTag,
    backgroundColor: token.colorPrimaryBg,
    color: token.colorPrimary,
    borderColor: token.colorPrimary,
  },
  default: {
    ...baseTag,
    backgroundColor: token.colorFillTertiary,
    color: token.colorTextSecondary,
    borderColor: token.colorBorder,
  },
});
