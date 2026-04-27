import { useAuthStore } from '@soly/shared';
import { DiscoveryHeader } from './components/DiscoveryHeader/DiscoveryHeader';
import * as styles from './styles';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CategoryPills } from './components/CategoryPills/CategoryPills';
import { SectionHeader } from './components/SectionHeader/SectionHeader';
import { BusinessCard } from './components/BusinessCard/BusinessCard';

export const DiscoveryPage = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const name = user?.firstName ?? (token ? '' : 'אורח');
  const avatar = user?.avatar;

  return (
    <div style={styles.pageContainer}>
      <DiscoveryHeader name={name} avatar={avatar} />
      <SearchBar />
      <CategoryPills />
      <SectionHeader title="מומלצים בקרבתך ⭐" onSeeAll={() => {}} />
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          padding: '0.75rem',
        }}
      >
        <BusinessCard
          name="ברבר שופ TLV"
          category="ספרות"
          location="דיזנגוף"
          distance="0.4 ק״מ"
          rating={4.9}
          reviewCount={127}
          isOpen={true}
        />
        <BusinessCard
          name="נייל בר"
          category="ציפורניים"
          location="רוטשילד"
          distance="1.2 ק״מ"
          rating={4.7}
          reviewCount={89}
        />
        <BusinessCard
          name="סטודיו לעיצוב שיער"
          category="עיצוב שיער"
          location="בן יהודה"
          distance="0.8 ק״מ"
          rating={4.8}
          reviewCount={54}
          isOpen={true}
        />
      </div>
    </div>
  );
};
