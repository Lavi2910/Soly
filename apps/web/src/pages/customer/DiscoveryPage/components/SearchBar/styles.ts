import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const containerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0 1rem 0 1rem',
};

export const filterButtonStyle: CSSProperties = {
  width: '2.5rem',
  height: '2.5rem',
  minWidth: '2.5rem',
  padding: 0,
};

export const getSearchIconStyle = (token: GlobalToken): CSSProperties => {
  return {
    width: 18,
    color: token.colorTextPlaceholder,
  };
};

export const getSliderIconStyles = (token: GlobalToken): CSSProperties => {
  return {
    width: 20,
    height: 20,
    color: token.colorBgContainer,
  };
};

export const getInputStyle = (token: GlobalToken): CSSProperties => {
  return {
    backgroundColor: token.colorBgContainer,
  };
};
