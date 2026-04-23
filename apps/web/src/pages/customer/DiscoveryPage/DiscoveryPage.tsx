import { useAuthStore } from '@soly/shared';
import { DiscoveryHeader } from './components/DiscoveryHeader/DiscoveryHeader';
import * as styles from './styles';
import { SearchBar } from './components/SearchBar/SearchBar';
export const DiscoveryPage = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const name = user?.firstName ?? (token ? '' : 'אורח');
  const avatar = user?.avatar;

  return (
    <div style={styles.pageContainer}>
      <DiscoveryHeader name={name} avatar={avatar} />
      <SearchBar />
      {/* CategoryPills — next */}
      {/* PromoBanner — next */}
      {/* SectionHeader + BusinessCards — next */}
    </div>
  );
};
