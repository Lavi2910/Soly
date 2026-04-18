import { useState } from 'react';
import { UserRound, Store, Search, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { theme } from 'antd';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

const menuItems: {
  key: string;
  icon: LucideIcon;
  path: string;
}[] = [
  { key: 'profile', icon: UserRound, path: '/profile' },
  {
    key: 'appointments',
    icon: Calendar,
    path: '/appointments',
  },
  {
    key: 'businesses',
    icon: Store,
    path: '/businesses',
  },
  { key: 'search', icon: Search, path: '/search' },
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
      {menuItems.map(({ key, icon: Icon, path }) => (
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
        </div>
      ))}
    </div>
  );
};
