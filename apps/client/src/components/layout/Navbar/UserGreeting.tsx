import { useAuthStore } from '@soly/shared';
import { SolyCard, SolyAvatar, SolyTypography } from '@soly/ui';
import * as styles from './styles';
export const UserGreeting = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <SolyCard variant="outlined" style={styles.userGreetingCardStyle}>
      <div style={styles.userGreetingContainer}>
        <SolyAvatar variant="medium" name={user?.name ?? 'אורח'} />
        <div style={styles.userGreetingTextBox}>
          <SolyTypography variant="sectionTitle">
            {`היי, ${user?.name ?? 'אורח'}`}
          </SolyTypography>
          <SolyTypography variant="caption">
            {'ברוכים הבאים ל-Soly'}
          </SolyTypography>
        </div>
      </div>
    </SolyCard>
  );
};
