import * as styles from './styles';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SolyInput } from '@soly/ui';
import { theme } from 'antd';
import { SolyButton } from '@soly/ui';

export const SearchBar = () => {
  const { token } = theme.useToken();

  return (
    <div style={styles.containerStyle}>
      <SolyInput
        variant="normal"
        placeholder="חפש עסק או שירות..."
        prefix={<Search style={styles.getSearchIconStyle(token)} />}
        style={styles.getInputStyle(token)}
        aria-label="חפש עסק או שירות..."
      />

      <SolyButton
        variant="gradient"
        style={styles.filterButtonStyle}
        aria-label="פתח מסננים"
      >
        {<SlidersHorizontal style={styles.getSliderIconStyles(token)} />}
      </SolyButton>
    </div>
  );
};
