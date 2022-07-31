import {
  DashboardSection,
  DashboardFirstSectionWrapper,
  DashboardNavAndBalWrapper,
  DashboardCurrencyWrapper,
  DashboardSecondSectionWrapper,
  DashboardWrapper,
  DashboardSeparator,
  ButtonAddTransactionsWrapper,
} from './DashboardPage.styled';
import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { ButtonAddTransactions } from '../components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransactions } from 'components/ModalAddTransaction/ModalAddTransaction';
import { Balance } from 'components/Balance/Balance';
import HomeTab from 'components/HomeTab/HomeTab';
import { Currency } from 'components/Currency/Currency';
import { Container } from 'stylesheet/Container.styled';
import { useState } from 'react';
/* import { css } from 'styled-components'; */

export const DashboardPage = () => {
  const [page, setPage] = useState('home');
  const changeComponent = e => {
    const { id } = e.currentTarget;
    setPage(id);
  };
  const modalAddTransactionStatus = useSelector(state=>
    state.global.isModalAddTransactionOpen);

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
          
          <DashboardSeparator></DashboardSeparator>
          <DashboardSecondSectionWrapper>
            <HomeTab page={page} />
            
          </DashboardSecondSectionWrapper>
        </DashboardWrapper>
        <ButtonAddTransactionsWrapper>
          <ButtonAddTransactions />
        </ButtonAddTransactionsWrapper>
        {modalAddTransactionStatus && <ModalAddTransactions/>}
      </Container>
    </DashboardSection>
  );
};
