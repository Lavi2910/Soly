import { Rate, theme, type RateProps } from 'antd';
import * as styles from './styles';

export const SolyRating = ({
  style,
  allowHalf = true,
  ...props
}: RateProps) => {
  const { token } = theme.useToken();

  return (
    <Rate
      allowHalf={allowHalf}
      style={{ ...styles.getRateStyles(token), ...style }}
      {...props}
    />
  );
};
