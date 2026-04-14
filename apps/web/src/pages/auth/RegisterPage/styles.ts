import { type CSSProperties } from 'react';
import { type GlobalToken } from 'antd';

export const pageBody: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
};

export const logoStyle: CSSProperties = {
  height: '5rem',
};

export const containerStyle = (token: GlobalToken): CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '2rem',
  backgroundColor: token.colorWhite,
  width: '23rem',
  padding: '2rem',
  flexDirection: 'column',
  alignItems: 'center',
});

export const segmentedStyle: CSSProperties = {
  marginBottom: '1rem',
};

export const titleStyle: CSSProperties = {
  marginBottom: '0.5rem',
};

export const userTypeStyle: CSSProperties = {
  marginBottom: '2rem',
};

export const inputContainerStyle: CSSProperties = {
  width: '100%',
};

export const inputStyle: CSSProperties = {
  marginBottom: '1rem',
};

export const loginStyle = (token: GlobalToken): CSSProperties => {
  return {
    color: token.colorPrimary,
    cursor: 'pointer',
    fontWeight: 600,
  };
};

export const poweredByDivStyle: CSSProperties = {
  marginTop: '1rem',
};

export const hasUserStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.4rem',
  marginTop: '1rem',
};

export const errorStyle = (token: GlobalToken): CSSProperties => {
  return {
    color: token.colorError,
    marginBottom: '1rem',
  };
};

export const getButtonStyle = (token: GlobalToken): CSSProperties => ({
  width: '100%',
  height: '2.5rem',
  boxShadow: token.boxShadowTertiary,
});

export const namesStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
};

export const nameDivStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};
