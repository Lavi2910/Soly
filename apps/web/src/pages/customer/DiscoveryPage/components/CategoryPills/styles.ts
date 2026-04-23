import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';
import { colors } from '@soly/shared';

export const scrollContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  overflowX: 'auto',
  padding: '0 1rem',
  scrollbarWidth: 'none',
};

export const activePillStyle: CSSProperties = {
  background: colors.gradientPrimary,
  border: '1px solid transparent',
  borderRadius: 20,
  padding: '0.35rem 0.85rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
};

export const getInactivePillStyle = (token: GlobalToken): CSSProperties => ({
  backgroundColor: token.colorBgContainer,
  border: `1px solid ${token.colorBorder}`,
  borderRadius: 20,
  padding: '0.35rem 0.85rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
});
