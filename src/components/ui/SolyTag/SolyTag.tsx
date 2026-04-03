import { Tag, theme, type TagProps as AntdTagProps } from 'antd';
import type { TagVariant } from './styles';
import * as styles from './styles';

interface SolyTagProps extends Omit<AntdTagProps, 'variant'> {
  variant?: TagVariant;
}

export const SolyTag = ({
  variant = 'default',
  style,
  ...props
}: SolyTagProps) => {
  const { token } = theme.useToken();
  const variantStyle = styles.getVariantStyles(token);

  return <Tag style={{ ...variantStyle[variant], ...style }} {...props}></Tag>;
};
