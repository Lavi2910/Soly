import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const menuItemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',
  cursor: 'pointer',
  paddingBlock: '1rem',
  borderRadius: '15px',
};

export const getMenuItemActiveStyle = (token: GlobalToken): CSSProperties => ({
  color: token.colorPrimary,
});

export const getMenuItemStyle = (
  token: GlobalToken,
  activeItem: string | null,
  key: string,
): CSSProperties => ({
  ...menuItemStyle,
  ...(activeItem === key ? getMenuItemActiveStyle(token) : {}),
});

export const getLabelStyle = (
  token: GlobalToken,
  activeItem: string | null,
  key: string,
): CSSProperties => (activeItem === key ? getMenuItemActiveStyle(token) : {});

export const iconStyle: CSSProperties = {
  width: 22,
  height: 22,
  strokeWidth: 2,
};

export const activeDot = (
  token: GlobalToken,
  visible: boolean,
): CSSProperties => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: token.colorPrimary,
  opacity: visible ? 1 : 0,
});

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
  height: '4.5rem',
  alignItems: 'center',
  paddingTop: '0.5rem',
});
