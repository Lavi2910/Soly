import { CSSProperties } from 'react';
import { colors } from '@soly/shared';
import { GlobalToken } from 'antd';

export const getContainerStyle = (token: GlobalToken): CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: token.colorFillQuaternary,
  borderRadius: 999,
  padding: 4,
  position: 'relative',
  width: '100%',
});

export const getSliderStyle = (
  selectedIndex: number,
  count: number,
  token: GlobalToken,
): CSSProperties => ({
  position: 'absolute',
  top: 4,
  bottom: 4,
  right: `calc(4px + ${selectedIndex} * (100% - 8px) / ${count})`,
  width: `calc((100% - 8px) / ${count})`,
  background: colors.gradientPrimary,
  borderRadius: 999,
  transition: 'right 0.3s ease',
  zIndex: 0,
  boxShadow: `0 4px 12px ${token.colorPrimaryBorder}`,
});

export const itemWrapperStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 16px',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  zIndex: 1,
  whiteSpace: 'nowrap',
};

export const getItemLabelStyle = (
  selected: boolean,
  token: GlobalToken,
): CSSProperties => ({
  color: selected ? token.colorBgContainer : token.colorText,
  transition: 'color 0.3s ease',
  display: 'block',
  textAlign: 'center',
  width: '100%',
});
