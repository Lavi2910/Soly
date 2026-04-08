import { theme } from 'antd';
import { SolyTypography } from '../SolyTypography/SolyTypography';
import * as styles from './styles';
import { type CSSProperties } from 'react';

interface SolySegmentedProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
}

export const SolySegmented = ({
  options,
  style,
  value,
  onChange,
}: SolySegmentedProps) => {
  const { token } = theme.useToken();
  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );

  return (
    <div style={{ ...styles.getContainerStyle(token), ...style }}>
      <div
        style={styles.getSliderStyle(selectedIndex, options.length, token)}
      />
      {options.map((option) => (
        <div
          key={option.value}
          style={styles.itemWrapperStyle}
          role="button"
          tabIndex={0}
          onClick={() => onChange(option.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onChange(option.value);
          }}
        >
          <SolyTypography
            variant="body"
            style={styles.getItemLabelStyle(option.value === value, token)}
          >
            {option.label}
          </SolyTypography>
        </div>
      ))}
    </div>
  );
};
