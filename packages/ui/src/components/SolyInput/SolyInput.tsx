import { type InputProps as AntdsInputProps, Input } from 'antd';
import { CSSProperties } from 'react';
import * as styles from './styles';
import { theme } from 'antd';

type InputVariants = 'normal' | 'password';

interface SolyInputProps extends Omit<AntdsInputProps, 'variant'> {
  style?: CSSProperties;
  placeholder?: string;
  variant: InputVariants;
}

export const SolyInput = ({
  style,
  placeholder,
  variant,
  ...props
}: SolyInputProps) => {
  const { token } = theme.useToken();

  if (variant === 'password') {
    return (
      <Input.Password
        placeholder={placeholder ?? 'סיסמה'}
        variant="outlined"
        style={{ ...styles.inputStyle(token), ...style }}
        {...props}
      />
    );
  }
  return (
    <Input
      placeholder={placeholder}
      variant="outlined"
      style={{ ...styles.inputStyle(token), ...style }}
      {...props}
    />
  );
};
