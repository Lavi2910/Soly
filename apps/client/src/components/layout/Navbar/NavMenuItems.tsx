import { useState } from 'react';
import { SolyTypography } from '@soly/ui';
import { UserRound, Store, Search, Calendar, LogOut } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { theme } from 'antd';
import { useAuthStore } from '@soly/shared';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

interface NavMenuItemsProps {
  onClose: () => void;
}

const menuItems: {
  key: string;
  icon: LucideIcon;
  label: string;
  path: string;
}[] = [
  { key: 'profile', icon: UserRound, label: 'פרופיל', path: '/profile' },
  {
    key: 'appointments',
    icon: Calendar,
    label: 'תורים שהזמנתי',
    path: '/appointments',
  },
  {
    key: 'businesses',
    icon: Store,
    label: 'נותני השירות שלי',
    path: '/businesses',
  },
  { key: 'search', icon: Search, label: 'חיפוש', path: '/search' },
];

export const NavMenuItems = ({ onClose }: NavMenuItemsProps) => {
  const { token } = theme.useToken();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const itemStyle = (key: string) => ({
    ...styles.menuItemStyle,
    ...(activeItem === key ? styles.getMenuItemActiveStyle(token) : {}),
  });

  return (
    <>
      {menuItems.map(({ key, icon: Icon, label, path }) => (
        <div
          key={key}
          role="button"
          tabIndex={0}
          style={itemStyle(key)}
          className="menu-item"
          onPointerDown={() => setActiveItem(key)}
          onPointerUp={() => setActiveItem(null)}
          onPointerLeave={() => setActiveItem(null)}
          onPointerCancel={() => setActiveItem(null)}
          onClick={() => handleNavigate(path)}
        >
          <Icon style={styles.iconStyle} />
          <SolyTypography variant="sectionTitle">{label}</SolyTypography>
        </div>
      ))}

      <div style={styles.logoutSectionStyle}>
        <hr style={styles.dividerStyle} />
        <div
          role="button"
          tabIndex={0}
          style={styles.menuItemStyle}
          className="menu-item"
          onPointerDown={() => setActiveItem('logout')}
          onPointerUp={() => setActiveItem(null)}
          onPointerLeave={() => setActiveItem(null)}
          onPointerCancel={() => setActiveItem(null)}
          onClick={() => {
            logout();
            handleNavigate('/login');
          }}
        >
          <LogOut style={styles.iconStyle} color={token.colorError} />
          <SolyTypography variant="sectionTitle" color={token.colorError}>
            {'התנתקות'}
          </SolyTypography>
        </div>
      </div>
    </>
  );
};
