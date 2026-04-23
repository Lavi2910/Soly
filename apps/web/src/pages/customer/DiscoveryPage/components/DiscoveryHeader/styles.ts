import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem',
};

export const actionsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
};

export const getNotificationButton = (token: GlobalToken): CSSProperties => ({
  background: token.colorBgContainer,
  border: 'none',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: token.boxShadowSecondary,
});

export const getNotificationIcon = (token: GlobalToken): CSSProperties => ({
  width: 20,
  height: 20,
  color: token.colorText,
});

export const getAvatarStyle = (token: GlobalToken): CSSProperties => {
  return {
    boxShadow: token.boxShadowSecondary,
  };
};
