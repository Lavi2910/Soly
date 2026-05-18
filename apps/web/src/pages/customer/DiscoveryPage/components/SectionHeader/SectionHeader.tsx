import { theme } from 'antd';
import { SolyTypography } from '@soly/ui';
import * as styles from './styles';

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

export const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => {
  const { token } = theme.useToken();
  return (
    <div style={styles.containerStyle}>
      <SolyTypography variant="pageTitle">{title}</SolyTypography>
      {onSeeAll && (
        <button
          type="button"
          style={styles.getSeeAllStyle(token)}
          onClick={onSeeAll}
        >
          <SolyTypography variant="captionInherit" color={token.colorPrimary}>
            {'ראה הכל'}
          </SolyTypography>
        </button>
      )}
    </div>
  );
};
