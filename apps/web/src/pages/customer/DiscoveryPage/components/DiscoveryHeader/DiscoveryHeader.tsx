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
    <div style={styles.containerStyle}>
      <SolyTypography variant="body">{`שלום, ${name || 'אורח'} 👋`}</SolyTypography>
      <div style={styles.actionsStyle}>
        <button
          type="button"
          aria-label="Notifications"
          style={styles.getNotificationButton(token)}
        >
          <Bell style={styles.getNotificationIcon(token)} />
        </button>
        <SolyAvatar
          src={avatar}
          variant="medium"
          name={name || 'אורח'}
          style={styles.getAvatarStyle(token)}
        />
      </div>
    </div>
  );
};
