import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export const getContainerStyle = (token: GlobalToken): CSSProperties => ({
  borderRadius: '1rem',
  overflow: 'hidden',
  backgroundColor: token.colorBgContainer,
  boxShadow: token.boxShadowTertiary,
  width: '16rem',
});

export const bannerSection: CSSProperties = {
  position: 'relative',
  height: '6rem',
};

export const bannerImage: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const getAvatarWrapper = (token: GlobalToken): CSSProperties => ({
  position: 'absolute',
  bottom: -25,
  right: 12,
  boxShadow: token.boxShadowTertiary,
  borderRadius: '50%',
});

export const infoArea: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  gap: '1rem',
};

export const desc: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
};

export const distanceDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.25rem',
  marginTop: '1rem',
};

export const getLocationIconStyle = (token: GlobalToken): CSSProperties => ({
  width: 16,
  height: 16,
  flexShrink: 0,
  color: token.colorTextSecondary,
});

export const ratingDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
};

export const businessName: CSSProperties = {
  margin: '1.5rem 1rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const getBookColor = (token: GlobalToken): CSSProperties => ({
  color: token.colorBgContainer,
});

export const bookAndRevDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

export const getBookStyle = (token: GlobalToken): CSSProperties => {
  return {
    boxShadow: token.boxShadowSecondary,
  };
};
