import { Rate, theme, type RateProps } from 'antd';
import { Star } from 'lucide-react';
import { SolyTypography } from '../SolyTypography/SolyTypography';
import * as styles from './styles';

type SolyRatingDefaultProps = Omit<RateProps, 'value'> & {
  variant?: 'default';
  value?: number;
};

type SolyRatingCompactProps = Omit<RateProps, 'value'> & {
  variant: 'compact';
  value: number;
};

type SolyRatingProps = SolyRatingDefaultProps | SolyRatingCompactProps;
export const SolyRating = ({
  style,
  allowHalf = true,
  variant = 'default',
  value,
  ...props
}: SolyRatingProps) => {
  const { token } = theme.useToken();

  if (variant === 'compact') {
    return (
      <div style={styles.compactContainer}>
        <SolyTypography variant="body" style={styles.getCompactText(token)}>
          {value}
        </SolyTypography>
        <Star style={styles.compactStar(token)} />
      </div>
    );
  }

  return (
    <Rate
      allowHalf={allowHalf}
      value={value}
      style={{ ...styles.getRateStyles(token), ...style }}
      {...props}
    />
  );
};
