import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export const getContainerStyle = (token: GlobalToken): CSSProperties => ({
  borderRadius: '1rem',
  overflow: 'hidden',
  backgroundColor: token.colorBgContainer,
  boxShadow: token.boxShadowSecondary,
  width: '13rem',
  height: '14rem',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
});

export const bannerSection: CSSProperties = {
  position: 'relative',
  height: '5rem',
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
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 0.75rem 0.5rem',
  gap: '0.25rem',
  flex: 1,
};

export const desc: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.15rem',
};

export const distanceDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.25rem',
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

export const ratingRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.25rem',
  margin: '0 0.75rem 0 0.75rem',
};

export const businessName: CSSProperties = {
  margin: '0.1rem 0.75rem 0 0.75rem',
};

export const openTagStyle: CSSProperties = {
  position: 'absolute',
  bottom: '0.4rem',
  left: '0.5rem',
};

export const nameText: CSSProperties = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  flex: 1,
};

export const categoryText: CSSProperties = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export const getBookColor = (token: GlobalToken): CSSProperties => ({
  color: token.colorBgContainer,
});

export const getBookStyle = (token: GlobalToken): CSSProperties => {
  return {
    boxShadow: token.boxShadowSecondary,
  };
};

export const statusTagStyle: CSSProperties = {
  padding: '0 0.35rem',
  lineHeight: 1,
};
