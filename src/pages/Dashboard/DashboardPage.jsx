import {
  DashboardFirstSectionWrapper,
  DashboardNavAndBalWrapper,
  DashboardCurrencyWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  DashboardSeparator,
  Dashboard,
  ButtonAddTransactionsWrapper,
} from './DashboardPage.styled';
import { lazy } from 'react';
import { Container } from 'stylesheet/Container.styled';
import { useLocation } from 'react-router-dom';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import Media from 'react-media';
const Header = lazy(() =>
  import('../../components/Header' /* webpackChunkName: "Header" */)
);
const Navigation = lazy(() =>
  import('../../components/Navigation' /* webpackChunkName: "Navigation" */)
);
const Balance = lazy(() =>
  import('../../components/Balance' /* webpackChunkName: "Balance" */)
);
const HomeTab = lazy(() =>
  import('../../components/HomeTab' /* webpackChunkName: "HomeTab" */)
);
const Currency = lazy(() =>
  import('../../components/Currency' /* webpackChunkName: "Currency" */)
);
const DiagramTab = lazy(() =>
  import('../../components/DiagramTab' /* webpackChunkName: "DiagramTab" */)
);
export const DashboardPage = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header />
      {/* <main> */}
      <Dashboard qwe={pathname}>
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
      </Dashboard>

      {/* </main> */}
      <ButtonAddTransactionsWrapper>
        <ButtonAddTransactions />
      </ButtonAddTransactionsWrapper>
      {/* </DashboardSection> */}
    </>
  );
};
