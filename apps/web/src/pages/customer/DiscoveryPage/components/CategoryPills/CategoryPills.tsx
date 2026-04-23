import { useState } from 'react';
import { theme } from 'antd';
import { SolyTypography } from '@soly/ui';
import * as styles from './styles';

const CATEGORIES = [
  { key: 'all', label: '+ הכל' },
  { key: 'hair', label: '💈 ספרות' },
  { key: 'nails', label: '💅 ציפורניים' },
  { key: 'styling', label: '💇 עיצוב שיער' },
  { key: 'skincare', label: '🧴 טיפוח עור' },
  { key: 'massage', label: '🫧 עיסוי' },
];

export const CategoryPills = () => {
  const { token } = theme.useToken();
  const [active, setActive] = useState('all');

  return (
    <div style={styles.scrollContainer}>
      {CATEGORIES.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          style={
            active === key
              ? styles.activePillStyle
              : styles.getInactivePill(token)
          }
          onClick={() => setActive(key)}
        >
          <SolyTypography
            variant="captionInherit"
            color={active === key ? 'white' : token.colorText}
          >
            {label}
          </SolyTypography>
        </button>
      ))}
    </div>
  );
};
