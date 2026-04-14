import { type GlobalToken } from 'antd';
import { type CSSProperties } from 'react';

export const inputStyle = (token: GlobalToken): CSSProperties => {
  return {
    borderColor: token.colorBorder,
    backgroundColor: token.colorBgLayout,
    height: '2.5rem',
    borderRadius: '15px',
  };
};
