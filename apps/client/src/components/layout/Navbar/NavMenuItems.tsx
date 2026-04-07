import { useState } from 'react';
import { SolyTypography } from '@soly/ui';
import { UserRound, Store, Search, Calendar, LogOut } from 'lucide-react';
import { theme } from 'antd';
import { useAuthStore } from '@soly/shared';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

interface NavMenuItemsProps {
  onClose: () => void;
}

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
      <div
        style={itemStyle('profile')}
        className="menu-item"
        onPointerDown={() => setActiveItem('profile')}
        onPointerUp={() => setActiveItem(null)}
        onClick={() => handleNavigate('/profile')}
      >
        <UserRound style={styles.iconStyle} />
        <SolyTypography variant="sectionTitle">{'פרופיל'}</SolyTypography>
      </div>
      <div
        style={itemStyle('appointments')}
        className="menu-item"
        onPointerDown={() => setActiveItem('appointments')}
        onPointerUp={() => setActiveItem(null)}
        onClick={() => handleNavigate('/appointments')}
      >
        <Calendar style={styles.iconStyle} />
        <SolyTypography variant="sectionTitle">
          {'תורים שהזמנתי'}
        </SolyTypography>
      </div>
      <div
        style={itemStyle('businesses')}
        className="menu-item"
        onPointerDown={() => setActiveItem('businesses')}
        onPointerUp={() => setActiveItem(null)}
        onClick={() => handleNavigate('/businesses')}
      >
        <Store style={styles.iconStyle} />
        <SolyTypography variant="sectionTitle">
          {'נותני השירות שלי'}
        </SolyTypography>
      </div>
      <div
        style={itemStyle('search')}
        className="menu-item"
        onPointerDown={() => setActiveItem('search')}
        onPointerUp={() => setActiveItem(null)}
        onClick={() => handleNavigate('/search')}
      >
        <Search style={styles.iconStyle} />
        <SolyTypography variant="sectionTitle">{'חיפוש'}</SolyTypography>
      </div>

      <div style={styles.logoutSectionStyle}>
        <hr style={styles.dividerStyle} />
        <div
          style={{
            ...styles.menuItemStyle,
            ...styles.getLogoutItemStyle(token),
          }}
          className="menu-item"
          onPointerDown={() => setActiveItem('logout')}
          onPointerUp={() => setActiveItem(null)}
          onClick={() => {
            logout();
            handleNavigate('/login');
          }}
        >
          <LogOut style={styles.iconStyle} />
          <SolyTypography
            variant="sectionTitle"
            style={styles.getLogoutItemStyle(token)}
          >
            {'התנתקות'}
          </SolyTypography>
        </div>
      </div>
    </>
  );
};
