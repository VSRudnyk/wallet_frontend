import { DashboardSection } from './DashboardPage.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';

export const DashboardPage = () => {
  return (
    <DashboardSection>
      <Navigation />
      <Balance />
    </DashboardSection>
  );
};
