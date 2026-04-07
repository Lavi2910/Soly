import { Avatar, theme, type AvatarProps as AntdAvatarProps } from 'antd';
import { type SolyAvatarVariants } from './styles';
import * as styles from './styles';

interface SolyAvatarProps extends AntdAvatarProps {
  variant?: SolyAvatarVariants;
  name?: string;
}

export const SolyAvatar = ({
  variant = 'medium',
  style,
  name,
  ...props
}: SolyAvatarProps) => {
  const { token } = theme.useToken();
  const variantStyle = styles.getAvatarStyle();
  const nameStyle =
    !props.src && name ? styles.getNameAvatarStyle(name, token) : {};

  return (
    <Avatar
      style={{ ...variantStyle[variant], ...nameStyle, ...style }}
      {...props}
    >
      {!props.src && name ? name[0] : undefined}
    </Avatar>
  );
};
