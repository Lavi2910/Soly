import {
  SolyTag,
  SolyTypography,
  SolyAvatar,
  SolyRating,
  SolyButton,
} from '@soly/ui';
import { MapPin } from 'lucide-react';
import * as styles from './styles';
import { theme } from 'antd';

interface BusinessCardProps {
  name: string;
  category: string;
  location: string;
  distance: string;
  rating: number;
  reviewCount: number;
  bannerImage?: string;
  logoImage?: string;
  isOpen?: boolean;
}

export const BusinessCard = ({
  name,
  category,
  location,
  distance,
  rating,
  reviewCount,
  bannerImage,
  logoImage,
  isOpen,
}: BusinessCardProps) => {
  const { token } = theme.useToken();
  return (
    <div style={styles.getContainerStyle(token)}>
      <div style={styles.bannerSection}>
        <img src={bannerImage} alt="Banner Image" style={styles.bannerImage} />
        <div style={styles.getAvatarWrapper(token)}>
          <SolyAvatar variant="medium" name={name} src={logoImage} />
        </div>
      </div>
      <div style={styles.businessName}>
        <SolyTypography variant="pageTitle">{name}</SolyTypography>
        {isOpen && (
          <SolyTag variant="status">
            <SolyTypography variant="caption">{'פתוח עכשיו!'}</SolyTypography>
          </SolyTag>
        )}
      </div>
      <div style={styles.infoArea}>
        <div style={styles.desc}>
          <SolyTypography variant="caption">
            {' '}
            {category + ' · ' + location}{' '}
          </SolyTypography>
          <div style={styles.distanceDiv}>
            <MapPin style={styles.getLocationIconStyle(token)} />
            <SolyTypography variant="caption">{distance}</SolyTypography>
          </div>
        </div>
        <div style={styles.bookAndRevDiv}>
          <div style={styles.ratingDiv}>
            <SolyRating variant="compact" value={rating} />
            <SolyTypography variant="caption">
              {`(${reviewCount})`}
            </SolyTypography>
          </div>
          <SolyButton variant="gradient">
            <SolyTypography
              variant="sectionTitle"
              style={styles.bookColor(token)}
            >
              {'קבע תור'}
            </SolyTypography>
          </SolyButton>
        </div>
      </div>
    </div>
  );
};
