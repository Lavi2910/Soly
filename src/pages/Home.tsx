import { SolyTypography } from '@/components/ui/SolyTypography/SolyTypography';
import { SolyCard } from '@/components/ui/SolyCard/SolyCard';

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
    </>
  );
};

export default Home;
