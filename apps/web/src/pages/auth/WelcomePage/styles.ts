import { type CSSProperties } from 'react';
import { type GlobalToken } from 'antd';
import { colors } from '@soly/shared';

export const pageBody = (token: GlobalToken): CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: token.colorBgLayout,
  gap: '1.5rem',
});

export const checkCircle = (token: GlobalToken): CSSProperties => ({
  width: 120,
  height: 120,
  borderRadius: '50%',
  background: colors.gradientPrimary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: token.boxShadowTertiary,
  flexShrink: 0,
});

export const cardStyle = (token: GlobalToken): CSSProperties => ({
  backgroundColor: token.colorWhite,
  borderRadius: 24,
  width: '23rem',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
  boxShadow: token.boxShadowTertiary,
  textAlign: 'center',
});

export const successTag = (token: GlobalToken): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: token.colorSuccessBg,
  color: token.colorSuccess,
  borderRadius: 999,
  padding: '0.25rem 0.85rem',
  fontSize: 12,
  fontWeight: 600,
});

export const subtitleStyle = (token: GlobalToken): CSSProperties => ({
  color: token.colorTextSecondary,
  lineHeight: 1.6,
});

export const pillsRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '0.25rem',
};

export const ctaButton = (token: GlobalToken): CSSProperties => ({
  width: '100%',
  height: '2.5rem',
  marginTop: '0.25rem',
  boxShadow: token.boxShadowTertiary,
});

export const loginLinkRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.3rem',
  alignItems: 'center',
};

export const loginLink = (token: GlobalToken): CSSProperties => ({
  color: token.colorPrimary,
  cursor: 'pointer',
  fontWeight: 600,
});

export const poweredByStyle: CSSProperties = {
  marginTop: '0.25rem',
};
