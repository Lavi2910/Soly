import { Button, theme } from 'antd';
import { type ButtonProps as AntdButtonProps } from 'antd';
import { type SolyButtonVariant } from './styles';
import * as styles from './styles';

interface ButtonProps extends Omit<AntdButtonProps, 'variant'> {
  variant?: SolyButtonVariant;
}

export const SolyButton = ({
  children,
  style,
  variant = 'outlined',
  ...props
}: ButtonProps) => {
  const { token } = theme.useToken();
  const variantStyles = styles.getButtonStyles(token);

  return (
    <Button style={{ ...variantStyles[variant], ...style }} {...props}>
      {children}
    </Button>
  );
};
