import { NavBar } from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import * as styles from './styles';

export const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
