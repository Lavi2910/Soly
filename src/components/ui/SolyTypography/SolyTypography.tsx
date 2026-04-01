import { Typography } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import * as types from './types';
import { type TypographyVariant } from './types';

interface SolyTypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  style?: CSSProperties;
  color?: string;
}

export const SolyTypography = ({
  children,
  variant = 'body',
  style,
  color,
}: SolyTypographyProps) => {
  const component = types.variantMap[variant];

  if (component === 'Title') {
    return (
      <Typography.Title
        style={{ ...types.variantStyles[variant], ...style, color }}
      >
        {children}
      </Typography.Title>
    );
  }

  return (
    <Typography.Text
      style={{ ...types.variantStyles[variant], ...style }}
      color={color}
    >
      {children}
    </Typography.Text>
  );
};
