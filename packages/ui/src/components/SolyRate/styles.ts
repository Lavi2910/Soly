import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export const getRateStyles = (token: GlobalToken): CSSProperties => ({
  color: token.colorWarning,
  fontSize: 16,
});

export const compactContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.25rem',
};

export const getCompactText = (token: GlobalToken): CSSProperties => ({
  fontSize: 16,
  fontWeight: 600,
  color: token.colorWarning,
});

export const getCompactStarStyle = (token: GlobalToken): CSSProperties => ({
  color: token.colorWarning,
  width: 18,
  height: 18,
  fill: 'currentColor',
});
