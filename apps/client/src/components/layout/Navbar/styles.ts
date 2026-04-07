import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const getMenuItemActiveStyle = (token: GlobalToken): CSSProperties => ({
  backgroundColor: token.colorPrimaryBg,
  boxShadow: `0 0 0 1px ${token.colorPrimary}`,
  color: token.colorPrimary,
});

export const menuItemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  marginBottom: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
  paddingBlock: '1rem',
  paddingInline: '1rem',
  marginInline: '0.75rem',
  borderRadius: '15px',
};

export const drawerWrapperStyle: CSSProperties = {
  width: '70%',
};

export const drawerBodyStyle: CSSProperties = {
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

export const drawerHeaderStyle: CSSProperties = {
  direction: 'rtl',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: '1rem',
};

export const logoStyle: CSSProperties = {
  height: '5rem',
};

export const closeIconStyle: CSSProperties = {
  cursor: 'pointer',
  width: 22,
  height: 22,
};

export const iconStyle: CSSProperties = {
  width: 22,
  height: 22,
  strokeWidth: 2,
};

export const userGreetingCardStyle: CSSProperties = {
  marginInline: '0.75rem',
  marginBottom: '1rem',
};

export const userGreetingContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
};

export const userGreetingTextBox: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export const dividerStyle: CSSProperties = {
  border: 'none',
  borderTop: '1px solid',
  borderColor: 'inherit',
  marginInline: '0.75rem',
  marginBlock: '0.5rem',
};

export const logoutSectionStyle: CSSProperties = {
  marginTop: 'auto',
};

export const getLogoutColor = (token: GlobalToken) => token.colorError;

export const getLogoutItemStyle = (token: GlobalToken): CSSProperties => ({
  color: getLogoutColor(token),
});
