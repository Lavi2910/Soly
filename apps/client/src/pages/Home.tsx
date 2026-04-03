import {
  SolyTypography,
  SolyCard,
  SolyButton,
  SolyAvatar,
  SolyTag,
  SolyRating,
} from '@soly/shared';

const Home = () => {
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
    </>
  );
};

export default Home;
