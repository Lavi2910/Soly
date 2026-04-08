import { CSSProperties } from 'react';
import { SolyTypography } from '../SolyTypography/SolyTypography';
import * as styles from './styles';

interface SolyPoweredByProps {
  style?: CSSProperties;
}

export const SolyPoweredBy = ({ style }: SolyPoweredByProps) => {
  return (
    <div style={{ ...styles.poweredByDivStyle, ...style }}>
      <SolyTypography variant="body">{'מופעל על ידי'}</SolyTypography>
      <SolyTypography variant="body" style={styles.solyTextStyle}>
        {'Soly'}
      </SolyTypography>
    </div>
  );
};
