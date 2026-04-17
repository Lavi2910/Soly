import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from 'antd';
import { SolyTypography, SolyButton, SolyPoweredBy, SolyTag } from '@soly/ui';
import { colors } from '@soly/shared';
import * as styles from './styles';

const PILLS = ['קביעת תורים 📅', 'ביקורות ⭐', 'תזכורות 🔔'];
const TOTAL_STEPS = 6;

export default function WelcomePage() {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = Array.from({ length: TOTAL_STEPS }, (_, i) =>
      setTimeout(() => setVisibleCount(i + 1), 80 + i * 120),
    );
    const confettiTimer = setTimeout(() => {
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.5 },
        colors: [...colors.gradientColors],
      });
    }, 450);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(confettiTimer);
    };
  }, []);

  const fadeIn = (step: number): CSSProperties => ({
    opacity: visibleCount >= step ? 1 : 0,
    transform: visibleCount >= step ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  });

  return (
    <div style={styles.pageBody(token)}>
      <div style={fadeIn(1)}>
        <div style={styles.checkCircle(token)}>
          <svg viewBox="0 0 52 52" width={64} height={64}>
            <polyline
              points="14,27 22,36 38,17"
              fill="none"
              stroke="white"
              strokeWidth={4.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={48}
              strokeDashoffset={visibleCount >= 1 ? 0 : 48}
              style={{ transition: 'stroke-dashoffset 0.45s ease 0.2s' }}
            />
          </svg>
        </div>
      </div>

      <div style={{ ...styles.cardStyle(token), ...fadeIn(2) }}>
        <div style={fadeIn(3)}>
          <span style={styles.successTag(token)}>{'החשבון נוצר בהצלחה ✓'}</span>
        </div>

        <div style={fadeIn(3)}>
          <SolyTypography variant="pageTitle">
            {'!ברוך הבא ל-SOLY 👋'}
          </SolyTypography>
        </div>

        <div style={fadeIn(4)}>
          <SolyTypography
            variant="bodySmall"
            style={styles.subtitleStyle(token)}
          >
            {
              'הפרופיל שלך מוכן. עכשיו אפשר לחפש, לקבוע תורים ולנהל הכל במקום אחד.'
            }
          </SolyTypography>
        </div>

        <div style={{ ...styles.pillsRow, ...fadeIn(5) }}>
          {PILLS.map((pill) => (
            <SolyTag key={pill}>{pill}</SolyTag>
          ))}
        </div>

        <div style={{ ...fadeIn(6), width: '100%' }}>
          <SolyButton
            variant="gradient"
            style={styles.ctaButton(token)}
            onClick={() => navigate('/home')}
          >
            <SolyTypography variant="body" color="white">
              {'לדף הבית 🏠'}
            </SolyTypography>
          </SolyButton>
        </div>
      </div>

      <div style={{ ...styles.loginLinkRow, ...fadeIn(6) }}>
        <SolyTypography variant="body">{'כבר יש לי חשבון —'}</SolyTypography>
        <div role="button" tabIndex={0} onClick={() => navigate('/login')}>
          <SolyTypography variant="body" style={styles.loginLink(token)}>
            {'כניסה'}
          </SolyTypography>
        </div>
      </div>

      <SolyPoweredBy style={styles.poweredByStyle} />
    </div>
  );
}
