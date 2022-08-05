import {
  DashboardFirstSectionWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  DashboardSeparator,
  Dashboard,
} from './DashboardPage.styled';
import { Container } from 'stylesheet/Container.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransactions } from 'components/ModalAddTransaction/ModalAddTransaction';
import Media from 'react-media';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import HomeTab from '../../components/HomeTab';
import Currency from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';

export const DashboardPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const modalAddTransactionStatus = useSelector(
    state => state.modal.isModalAddTransactionOpen
  );

  return (
    <>
      <Header />
      <Dashboard pathname={pathname}>
        <Container>
          <DashboardWrapper>
            <DashboardFirstSectionWrapper>
              <div>
                <Navigation />
                <Balance />
                <Media queries={{ mobile: { maxWidth: 767 } }}>
                  {matches =>
                    matches.mobile && (
                      <div>
                        <Currency />
                      </div>
                    )
                  }
                </Media>
              </div>
              <Media queries={{ table: { minWidth: 768 } }}>
                {matches =>
                  matches.table && (
                    <div>
                      <Currency />
                    </div>
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
          {modalAddTransactionStatus && <ModalAddTransactions />}
        </Container>
      </Dashboard>
      {location.pathname === '/wallet_frontend/home' && (
        <ButtonAddTransactions />
      )}
    </>
  );
};
