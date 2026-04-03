import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export const getRateStyles = (token: GlobalToken): CSSProperties => ({
  color: token.colorWarning,
  fontSize: 16,
});
