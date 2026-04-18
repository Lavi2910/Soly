import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const getMenuItemActiveStyle = (token: GlobalToken): CSSProperties => ({
  color: token.colorPrimary,
});

export const menuItemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
  paddingBlock: '1rem',
  paddingInline: '1rem',
  marginInline: '0.75rem',
  borderRadius: '15px',
};

export const iconStyle: CSSProperties = {
  width: 22,
  height: 22,
  strokeWidth: 2,
};

export const containerStyle = (token: GlobalToken): CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  borderTop: `1px solid ${token.colorBorder}`,
  boxShadow: token.boxShadow,
  backgroundColor: token.colorBgContainer,
  height: '4rem',
  alignItems: 'center',
});
