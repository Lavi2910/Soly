import { colors } from '@soly/shared';
import { CSSProperties } from 'react';

export const poweredByDivStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.4rem',
};

export const solyTextStyle = (): CSSProperties => {
  return {
    background: colors.gradientPrimary,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 600,
  };
};
