import { SolyDrawer } from '@soly/ui';
import { X } from 'lucide-react';
import { LogoWide } from '@soly/shared';
import * as styles from './styles';
import { UserGreeting } from './UserGreeting';
import { NavMenuItems } from './NavMenuItems';

interface NavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavBar = ({ isOpen, onClose }: NavBarProps) => {
  return (
    <SolyDrawer
      closable={false}
      styles={{
        wrapper: styles.drawerWrapperStyle,
        body: styles.drawerBodyStyle,
      }}
      open={isOpen}
      onClose={onClose}
    >
      <div style={styles.drawerHeaderStyle}>
        <img src={LogoWide} alt="Soly" style={styles.logoStyle} />
        <X onClick={onClose} style={styles.closeIconStyle} />
      </div>
      <UserGreeting />
      <NavMenuItems onClose={onClose} />
    </SolyDrawer>
  );
};
