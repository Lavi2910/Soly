import { useState } from 'react';
import { theme } from 'antd';
import { Menu } from 'lucide-react';
import { NavBar } from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import * as styles from './style';

export const AppLayout = () => {
  const { token } = theme.useToken();
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }
  return (
    <>
      <Menu onClick={openMenu} style={styles.getMenuStyle(token)} />
      <NavBar isOpen={isOpen} onClose={onClose} />
      <Outlet />
    </>
  );
};
