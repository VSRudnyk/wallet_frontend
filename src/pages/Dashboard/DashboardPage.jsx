import {
  DashboardFirstSectionWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  DashboardSeparator,
  Dashboard,
} from './DashboardPage.styled';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'stylesheet/Container.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransactions } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useGetAllTransactionsQuery } from '../../redux/transactionsOperation';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { updateBalance } from 'redux/global/globalActions';
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
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );
  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (data !== undefined && data.length > 0) {
      const sortedTransactions = [...data].sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        return Number(date2) - Number(date1);
      });

      const arr = [];
      sortedTransactions.reverse().reduce((previousValue, item) => {
        const itemNew = {
          ...item,
          balance:
            item.type === 'expense'
              ? previousValue - item.sum
              : previousValue + item.sum,
        };
        arr.push(itemNew);
        return item.type === 'expense'
          ? previousValue - item.sum
          : previousValue + item.sum;
      }, 0);

      if (data && arr.length === data.length) {
        dispatch(updateBalance(arr[arr.length - 1].balance));
        setTransactions(arr.reverse());
      }
    } else {
      setTransactions([]);
      dispatch(updateBalance(0));
    }
  }, [data, isLoading, isSuccess, dispatch]);

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
            <DashboardSecondSectionWrapper>
              {pathname === '/wallet_frontend/diagram' && <DiagramTab />}
              {location.pathname === '/wallet_frontend/home' && (
                <>
                  <HomeTab transactionsList={transactions} />
                  <ButtonAddTransactions />
                </>
              )}
            </DashboardSecondSectionWrapper>
          </DashboardWrapper>
          {modalAddTransactionStatus && <ModalAddTransactions />}
        </Container>
      </Dashboard>
      {/* {location.pathname === '/wallet_frontend/home' && (
        <ButtonAddTransactions />
      )} */}
    </>
  );
};
