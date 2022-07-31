import {
  DashboardSection,
  DashboardFirstSectionWrapper,
  DashboardNavAndBalWrapper,
  DashboardCurrencyWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  DashboardSeparator,
} from './DashboardPage.styled';
import Media from 'react-media';

import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import HomeTab from 'components/HomeTab/HomeTab';
import { Currency } from 'components/Currency/Currency';
import { Container } from 'stylesheet/Container.styled';
import { useLocation, Outlet } from 'react-router-dom';

export const DashboardPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <DashboardSection>
      <Container>
        <DashboardWrapper>
          <DashboardFirstSectionWrapper>
            <DashboardNavAndBalWrapper>
              <Navigation />
              <Balance />
              <Media queries={{ mobile: { maxWidth: 768 } }}>
                {matches =>
                  matches.mobile && (
                    <DashboardCurrencyWrapper>
                      <Currency />
                    </DashboardCurrencyWrapper>
                  )
                }
              </Media>
            </DashboardNavAndBalWrapper>
            <Media queries={{ table: { minWidth: 768 } }}>
              {matches =>
                matches.table && (
                  <DashboardCurrencyWrapper>
                    <Currency />
                  </DashboardCurrencyWrapper>
                )
              }
            </Media>
          </DashboardFirstSectionWrapper>

          <DashboardSeparator></DashboardSeparator>
          {pathname === '/wallet_frontend/diagram' && <Outlet />}
          <DashboardSecondSectionWrapper>
            {location.pathname === '/wallet_frontend/main' && <HomeTab />}
          </DashboardSecondSectionWrapper>
        </DashboardWrapper>
      </Container>
    </DashboardSection>
  );
};
