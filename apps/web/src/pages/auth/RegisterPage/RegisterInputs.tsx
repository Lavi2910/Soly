import { SolyInput, SolyTypography } from '@soly/ui';
import * as styles from './styles';

interface RegisterInputsProps {
  firstName: string;
  onFirstNameChange: (value: string) => void;
  lastName: string;
  onLastNameChange: (value: string) => void;
  phone: string;
  onPhoneChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  confirmPassword: string;
  onConfirmPasswordChange: (value: string) => void;
}

export const RegisterInputs = ({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  phone,
  onPhoneChange,
  password,
  onPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
}: RegisterInputsProps) => {
  return (
    <>
      <div style={styles.inputContainerStyle}>
        <div style={styles.namesStyle}>
          <div style={styles.nameDivStyle}>
            <SolyTypography variant="caption">{'שם פרטי'}</SolyTypography>
            <SolyInput
              variant="normal"
              placeholder="שם פרטי"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
              style={styles.inputStyle}
            />
          </div>
          <div style={styles.nameDivStyle}>
            <SolyTypography variant="caption">{'שם משפחה'}</SolyTypography>
            <SolyInput
              variant="normal"
              placeholder="שם משפחה"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
              style={styles.inputStyle}
            />
          </div>
        </div>
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
        <SolyTypography variant="caption">{'אימות סיסמה'}</SolyTypography>
        <SolyInput
          variant="password"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          style={styles.inputStyle}
        />
      </div>
    </>
  );
};
