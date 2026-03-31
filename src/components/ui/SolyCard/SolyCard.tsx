import { Card, type CardProps as AntdCardProps, theme } from 'antd';
import { getVariantStyles, type SolyCardVariant } from './styles';

interface SolyCardProps extends Omit<AntdCardProps, 'variant'> {
  variant?: SolyCardVariant;
}

export const SolyCard = ({
  variant = 'white',
  style,
  ...props
}: SolyCardProps) => {
  const { token } = theme.useToken();
  const variantStyles = getVariantStyles(token);

  return <Card style={{ ...variantStyles[variant], ...style }} {...props} />;
};
