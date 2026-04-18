import {
  SolyTypography,
  SolyCard,
  SolyButton,
  SolyAvatar,
  SolyTag,
  SolyRating,
} from '@soly/ui';

import { BusinessCard } from '@/components/ui/BusinessCard/BusinessCard';

export const HomePage = () => {
  return (
    <>
      <SolyTypography variant="heroTitle">בדיקה</SolyTypography>
      <SolyTypography variant="pageTitle">בדיקה</SolyTypography>
      <SolyTypography variant="sectionTitle">בדיקה</SolyTypography>
      <SolyTypography variant="body">בדיקה</SolyTypography>
      <SolyTypography variant="bodySmall">בדיקה</SolyTypography>
      <SolyTypography variant="caption">בדיקה</SolyTypography>
      <SolyCard></SolyCard>
      <SolyCard variant="outlined"></SolyCard>
      <SolyCard variant="gradient">
        <h1>קבע תור עכשיו</h1>
      </SolyCard>
      <SolyButton variant="gradient">
        <SolyTypography variant="heroTitle" color="white">
          בדיקה
        </SolyTypography>
      </SolyButton>

      <SolyAvatar variant="medium" name="איציק" />
      <SolyAvatar variant="medium" name="יוני" />
      <SolyAvatar variant="medium" name="שרון" />
      <SolyAvatar variant="medium" name="יוגי" />

      <SolyTag>
        <SolyTypography variant="body">בדיקה</SolyTypography>
      </SolyTag>
      <SolyTag variant="highlight">
        <SolyTypography variant="body">בדיקה</SolyTypography>
      </SolyTag>
      <SolyTag variant="status">
        <SolyTypography variant="body">בדיקה</SolyTypography>
      </SolyTag>

      <SolyRating disabled value={4.8} />

      <BusinessCard
        name="soly"
        category="מספרת גברים"
        location="תל אביב"
        distance="5km"
        rating={4.5}
        reviewCount={11}
        bannerImage="https://images.squarespace-cdn.com/content/v1/67ab73d8c72b0b3112e60d7f/1739289561594-0NCL1Q930LCVP0HMX7T8/Statement-Barbershop-Interiors-197.jpg"
        isOpen={true}
      />
    </>
  );
};
