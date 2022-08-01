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
import { Header } from 'components/Header';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import HomeTab from 'components/HomeTab/HomeTab';
import { Currency } from 'components/Currency';
import { Container } from 'stylesheet/Container.styled';
import { useLocation } from 'react-router-dom';
import { DiagramTab } from 'components/DiagramTab';

export const DashboardPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header />
      <DashboardSection>
        <Container>
          <DashboardWrapper>
            <DashboardFirstSectionWrapper>
              <DashboardNavAndBalWrapper>
                <Navigation />
                <Balance />
                <Media queries={{ mobile: { maxWidth: 767 } }}>
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
            {pathname === '/wallet_frontend/diagram' && <DiagramTab />}
            <DashboardSecondSectionWrapper>
              {location.pathname === '/wallet_frontend/home' && <HomeTab />}
            </DashboardSecondSectionWrapper>
          </DashboardWrapper>
        </Container>
      </DashboardSection>
    </>
  );
};