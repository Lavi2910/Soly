import { SolyTypography } from '@soly/ui';
import * as styles from './styles';
import { theme } from 'antd';

export const ForgotPassword = () => {
  const { token } = theme.useToken();
  return (
    <div onClick={() => {}} style={styles.forgotPasswordDivStyle}>
      <SolyTypography
        variant="caption"
        style={styles.forgotPasswordStyle(token)}
      >
        {'שכחת סיסמה?'}
      </SolyTypography>
    </div>
  );
};
