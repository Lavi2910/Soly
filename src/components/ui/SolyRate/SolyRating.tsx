import { Rate, theme, type RateProps } from 'antd';
import * as styles from './styles';

export const SolyRating = (props: RateProps) => {
  const { token } = theme.useToken();

  return <Rate allowHalf style={styles.getRateStyles(token)} {...props} />;
};
