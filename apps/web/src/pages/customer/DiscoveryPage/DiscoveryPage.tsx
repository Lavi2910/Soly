import { useAuthStore } from '@soly/shared';
import { DiscoveryHeader } from './components/DiscoveryHeader/DiscoveryHeader';
import * as styles from './styles';

export const DiscoveryPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div style={styles.pageContainer}>
      <DiscoveryHeader name={user?.firstName || 'אורח'} avatar={user?.avatar} />
      {/* SearchBar — next */}
      {/* CategoryPills — next */}
      {/* PromoBanner — next */}
      {/* SectionHeader + BusinessCards — next */}
    </div>
  );
};
