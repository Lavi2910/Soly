import { useState } from 'react';
import { theme } from 'antd';
import { Logo } from '@soly/shared';
import * as styles from './styles';
import { RegisterInputs } from './RegisterInputs';
import { SolyTypography, SolyPoweredBy, SolyButton } from '@soly/ui';
import { useRegister } from '@/hooks/useRegister';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const { token } = theme.useToken();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleRegister, loading, error } = useRegister();
  const navigate = useNavigate();

  return (
    <>
      <div
        style={styles.pageBody}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !loading)
            handleRegister(
              firstName,
              lastName,
              phone,
              password,
              confirmPassword,
            );
        }}
      >
        <img src={Logo} alt="Soly Logo" style={styles.logoStyle} />
        <div style={styles.containerStyle(token)}>
          <RegisterInputs
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            password={password}
            confirmPassword={confirmPassword}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            onPasswordChange={setPassword}
            onPhoneChange={setPhone}
            onConfirmPasswordChange={setConfirmPassword}
          />
          {error && (
            <SolyTypography variant="caption" style={styles.errorStyle(token)}>
              {error}
            </SolyTypography>
          )}

          <SolyButton
            variant="gradient"
            style={styles.getButtonStyle(token)}
            onClick={() =>
              handleRegister(
                firstName,
                lastName,
                phone,
                password,
                confirmPassword,
              )
            }
            loading={loading}
          >
            <SolyTypography variant="body" color="white">
              {'הרשמה'}
            </SolyTypography>
          </SolyButton>
        </div>
        <div style={styles.hasUserStyle}>
          <SolyTypography variant="body">{'יש לך חשבון?'}</SolyTypography>
          <div role="button" tabIndex={0} onClick={() => navigate('/login')}>
            <SolyTypography variant="body" style={styles.loginStyle(token)}>
              {'התחברות'}
            </SolyTypography>
          </div>
        </div>
        <SolyPoweredBy style={styles.poweredByDivStyle} />
      </div>
    </>
  );
}
