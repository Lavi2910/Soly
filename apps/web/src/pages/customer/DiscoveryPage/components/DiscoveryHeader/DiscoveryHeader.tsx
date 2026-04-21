import * as styles from './styles';
import { SolyTypography, SolyAvatar } from '@soly/ui';
import { Bell } from 'lucide-react';
import { theme } from 'antd';

interface DiscoveryHeaderProps {
  name: string;
  avatar?: string;
}

export const DiscoveryHeader = ({ name, avatar }: DiscoveryHeaderProps) => {
  const { token } = theme.useToken();
  return (
    <div style={styles.getContainerStyle(token)}>
      <SolyTypography variant="body">{`שלום, ${name} 👋`}</SolyTypography>
      <div style={styles.actionsStyle}>
        <button style={styles.notificationButton}>
          <Bell style={styles.getNotificationIcon(token)} />
        </button>
        <SolyAvatar src={avatar} variant="medium" name={name} />
      </div>
    </div>
  );
};
