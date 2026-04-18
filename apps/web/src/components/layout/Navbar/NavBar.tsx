import { useState } from 'react';
import { UserRound, Store, Search, Calendar } from 'lucide-react';
import { theme } from 'antd';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

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
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const itemStyle = (key: string) => ({
    ...styles.menuItemStyle,
    ...(activeItem === key ? styles.getMenuItemActiveStyle(token) : {}),
  });

  return (
    <div style={styles.containerStyle(token)}>
      {menuItems.map(({ key, icon: Icon, label, path }) => (
        <div
          key={key}
          role="button"
          tabIndex={0}
          style={itemStyle(key)}
          className="menu-item"
          aria-label={label}
          onPointerDown={() => setActiveItem(key)}
          onPointerUp={() => setActiveItem(null)}
          onPointerLeave={() => setActiveItem(null)}
          onPointerCancel={() => setActiveItem(null)}
          onClick={() => handleNavigate(path)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleNavigate(path);
          }}
        >
          <Icon style={styles.iconStyle} />
        </div>
      ))}
    </div>
  );
};
