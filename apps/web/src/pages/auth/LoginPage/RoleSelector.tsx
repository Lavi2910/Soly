import { SolySegmented, SolyTypography } from '@soly/ui';
import * as styles from './styles';
import type { Role } from '@soly/shared';

interface RoleSelectorProps {
  onChange: (role: Role) => void;
  role: Role;
}

export const RoleSelector = ({ onChange, role }: RoleSelectorProps) => {
  return (
    <>
      <SolySegmented
        value={role}
        onChange={(value) => onChange(value as Role)}
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
