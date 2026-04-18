import { UserRound, Store, Search, Calendar } from 'lucide-react';
import { theme } from 'antd';
import * as styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { SolyTypography } from '@soly/ui';

const menuItems = [
  { key: 'profile', icon: UserRound, path: '/profile', label: 'פרופיל' },
  {
    key: 'appointments',
    icon: Calendar,
    path: '/appointments',
    label: 'תורים',
  },
  { key: 'businesses', icon: Store, path: '/businesses', label: 'עסקים' },
  { key: 'search', icon: Search, path: '/search', label: 'חיפוש' },
];

export const NavBar = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeItem =
    menuItems.find((item) => pathname.startsWith(item.path))?.key ?? null;

  return (
    <div style={styles.containerStyle(token)}>
      {menuItems.map(({ key, icon: Icon, label, path }) => (
        <div
          key={key}
          role="button"
          tabIndex={0}
          style={styles.getMenuItemStyle(token, activeItem, key)}
          className="menu-item"
          onClick={() => navigate(path)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              navigate(path);
            }
          }}
        >
          <Icon style={styles.iconStyle} />
          <SolyTypography
            variant="caption"
            style={styles.getLabelStyle(token, activeItem, key)}
          >
            {label}
          </SolyTypography>
          <div style={styles.activeDot(token, activeItem === key)} />
        </div>
      ))}
    </div>
  );
};
