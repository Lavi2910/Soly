import { Logo } from '@soly/shared';
import { theme } from 'antd';
import { SolyTypography, SolyButton, SolyPoweredBy } from '@soly/ui';
import * as styles from './styles';
import { RoleSelector } from './RoleSelector';
import { LoginInputs } from './LoginInputs';
import { useState } from 'react';
import { useLogin } from '@/hooks/userLogin';

export default function LoginPage() {
  const { token } = theme.useToken();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const { handleLogin, loading, error } = useLogin();

  return (
    <>
      <div
        style={styles.pageBody}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleLogin(phone, password, role);
        }}
      >
        <img src={Logo} alt="Soly Logo" style={styles.logoStyle} />
        <div style={styles.containerStyle(token)}>
          <RoleSelector role={role} onChange={setRole} />
          <LoginInputs
            phone={phone}
            password={password}
            onPasswordChange={setPassword}
            onPhoneChange={setPhone}
          />
          {error && (
            <SolyTypography variant="caption" style={styles.errorStyle(token)}>
              {error}
            </SolyTypography>
          )}

          <SolyButton
            variant="gradient"
            style={styles.getButtonStyle(token)}
            onClick={() => handleLogin(phone, password, role)}
            loading={loading}
          >
            <SolyTypography variant="body" color="white">
              {'כניסה'}
            </SolyTypography>
          </SolyButton>
        </div>
        <div style={styles.noUserStyle}>
          <SolyTypography variant="body">{'אין לך חשבון?'}</SolyTypography>
          <div onClick={() => {}}>
            <SolyTypography variant="body" style={styles.registerStyle(token)}>
              {'הרשמה'}
            </SolyTypography>
          </div>
        </div>
        <SolyPoweredBy style={styles.poweredByDivStyle} />
      </div>
    </>
  );
}
