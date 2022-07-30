import { DashboardSection } from './DashboardPage.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import HomeTab from 'components/HomeTab';

export const DashboardPage = () => {
  return (
    <DashboardSection>
      <Navigation />
      <Balance />
      <HomeTab />
    </DashboardSection>
  );
};
