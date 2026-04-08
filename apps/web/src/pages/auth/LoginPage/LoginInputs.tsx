import { SolyInput } from '@soly/ui';
import * as styles from './styles';
import { SolyTypography } from '@soly/ui';
import { ForgotPassword } from './ForgotPassword';

interface LoginInputsProps {
  phone: string;
  onPhoneChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
}

export const LoginInputs = ({
  phone,
  onPhoneChange,
  password,
  onPasswordChange,
}: LoginInputsProps) => {
  return (
    <>
      <div style={styles.inputContainerStyle}>
        <SolyTypography variant="caption">{'מספר טלפון'}</SolyTypography>
        <SolyInput
          variant="normal"
          placeholder="050-000-0000"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          style={styles.inputStyle}
        />
        <SolyTypography variant="caption">{'סיסמה'}</SolyTypography>
        <SolyInput
          variant="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          style={styles.inputStyle}
        />
        <ForgotPassword />
      </div>
    </>
  );
};
