import {
  DashboardSection,
  DashboardFirstSectionWrapper,
  DashboardNavAndBalWrapper,
  DashboardCurrencyWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  Qwe,
} from './DashboardPage.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import HomeTab from 'components/HomeTab/HomeTab';
import { Currency } from 'components/Currency/Currency';
import { Container } from 'stylesheet/Container.styled';
import { useState } from 'react';

export const DashboardPage = () => {
  const [page, setPage] = useState('home');
  const changeComponent = e => {
    const { id } = e.currentTarget;
    setPage(id);
  };

  return (
    <DashboardSection>
      <Container>
        <DashboardWrapper>
          <DashboardFirstSectionWrapper>
            <DashboardNavAndBalWrapper>
              <Navigation page={page} changeComponent={changeComponent} />
              <Balance page={page} />
            </DashboardNavAndBalWrapper>
            <DashboardCurrencyWrapper>
              <Currency page={page} />
            </DashboardCurrencyWrapper>
          </DashboardFirstSectionWrapper>
          <Qwe></Qwe>
          <DashboardSecondSectionWrapper>
            <HomeTab page={page} />
          </DashboardSecondSectionWrapper>
        </DashboardWrapper>
      </Container>
    </DashboardSection>
  );
};
