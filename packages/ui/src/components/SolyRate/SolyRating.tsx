import { Rate, theme, type RateProps } from 'antd';
import { Star } from 'lucide-react';
import { SolyTypography } from '../SolyTypography/SolyTypography';
import * as styles from './styles';

interface SolyRatingProps extends RateProps {
  variant?: 'default' | 'compact';
  value?: number;
}

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
      <div style={{ ...styles.compactContainer, ...style }}>
        <SolyTypography variant="body" style={styles.getCompactText(token)}>
          {value}
        </SolyTypography>
        <Star style={styles.getCompactStarStyle(token)} />
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
