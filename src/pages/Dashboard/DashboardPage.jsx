import { useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetAllTransactionsQuery } from '../../redux/transactionsOperation';
import Header from '../../components/Header';
import { Container } from 'stylesheet/Container.styled';
import {
  Dashboard,
} from './DashboardPage.styled';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery();
  const [transactions, setTransactions] = useState([]);



  return (
    <Fragment>
      <Header />
      <Dashboard pathname={pathname}>
        <Container>

        </Container>
      </Dashboard>
    </Fragment>
  );
};
