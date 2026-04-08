import type { CSSProperties } from 'react';
import { type GlobalToken } from 'antd';

export const getFixedBackgroundStyle = (token: GlobalToken): CSSProperties => ({
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  backgroundColor: token.colorBgLayout,
});

export const getMenuStyle = (token: GlobalToken): CSSProperties => ({
  position: 'fixed',
  top: 16,
  left: 16,
  zIndex: 1000,
  backgroundColor: token.colorPrimary,
  color: token.colorWhite,
  borderRadius: '50%',
  cursor: 'pointer',
  padding: 8,
  width: '2.7rem',
  height: '2.7rem',
  boxShadow: token.boxShadowSecondary,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
