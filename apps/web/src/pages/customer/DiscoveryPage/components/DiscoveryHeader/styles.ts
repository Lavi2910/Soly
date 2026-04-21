import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const getContainerStyle = (token: GlobalToken): CSSProperties => {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    backgroundColor: token.colorBgContainer,
  };
};

export const actionsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
};

export const notificationButton: CSSProperties = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const getNotificationIcon = (token: GlobalToken): CSSProperties => ({
  width: 22,
  height: 22,
  color: token.colorText,
});
