import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 0.75rem',
};

export const getSeeAllStyle = (token: GlobalToken): CSSProperties => ({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: token.colorPrimary,
});
