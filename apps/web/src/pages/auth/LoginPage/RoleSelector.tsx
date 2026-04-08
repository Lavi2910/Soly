import { SolySegmented, SolyTypography } from '@soly/ui';
import * as styles from './styles';

interface RoleSelectorProps {
  onChange: (role: string) => void;
  role: string;
}

export const RoleSelector = ({ onChange, role }: RoleSelectorProps) => {
  return (
    <>
      <SolySegmented
        value={role}
        onChange={onChange}
        options={[
          { label: 'לקוח', value: 'CUSTOMER' },
          { label: 'נותן שירות', value: 'PROVIDER' },
        ]}
        style={styles.segmentedStyle}
      />
      <SolyTypography variant="pageTitle" style={styles.titleStyle}>
        {'ברוכים הבאים'}
      </SolyTypography>
      <SolyTypography variant="caption" style={styles.userTypeStyle}>
        {role === 'CUSTOMER'
          ? 'התחבר לחשבונך כלקוח'
          : 'התחבר לחשבונך כנותן שירות'}
      </SolyTypography>
    </>
  );
};
