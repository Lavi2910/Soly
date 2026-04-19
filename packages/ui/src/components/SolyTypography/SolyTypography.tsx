import { Typography, theme } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import * as types from './styles';
import { type TypographyVariant } from './styles';

interface SolyTypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  style?: CSSProperties;
  color?: string;
}

export const SolyTypography = ({
  children,
  variant,
  style,
  color,
}: SolyTypographyProps) => {
  const { token } = theme.useToken();
  const variantStyles = types.getVariantStyles(token);
  const component = types.variantMap[variant];

  if (component === 'Title') {
    return (
      <Typography.Title
        style={{
          ...variantStyles[variant],
          ...style,
          ...(color !== undefined ? { color } : {}),
        }}
      >
        {children}
      </Typography.Title>
    );
  }

  return (
    <Typography.Text
      style={{
        ...variantStyles[variant],
        ...style,
        ...(color !== undefined ? { color } : {}),
      }}
    >
      {children}
    </Typography.Text>
  );
};
