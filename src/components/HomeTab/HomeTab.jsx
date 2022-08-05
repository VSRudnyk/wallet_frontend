import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { useGetAllTransactionsQuery } from '../../redux/transactionsOperation';
import { Loader } from 'components/Loader';
import { v4 as uuidv4 } from 'uuid';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import {
  HomeTabWrapper,
  List,
  ListItem,
  Text,
  Pagination,
  PaginationBtn,
} from './HomeTab.styled';
import Media from 'react-media';

export const HomeTab = ({ page }) => {
  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery();
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length !== 0) {
      return;
    }

    isSuccess && setTransactions(data);
  }, [data, isLoading, isSuccess, transactions]);

  const sortedTransactions = [...transactions].sort((item1, item2) => {
    const date1 = new Date(item1.date);
    const date2 = new Date(item2.date);
    return Number(date2) - Number(date1);
  });
  const childRef = useRef(null);

  const next = value => {
    childRef.current?.next(value);
  };
  const previous = value => {
    childRef.current?.previous(value);
  };

  return (
    <HomeTabWrapper page={page}>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            sortedTransactions.length === 0 ? (
              isLoading ? (
                <Loader color="red" size="35" />
              ) : (
                // <Loader color="#1f38dd" size="35" />
                // <Loader />
                <Text>{t('noTransactionText')}</Text>
              )
            ) : (
              <List>
                {sortedTransactions.map(transaction => {
                  return (
                    <ListItem key={uuidv4()}>
                      <TransactionMobile obj={transaction} />
                    </ListItem>
                  );
                })}
              </List>
            )
          ) : sortedTransactions.length === 0 ? (
            isLoading ? (
              <Loader color="red" size="35" />
            ) : (
              // <Loader color="#1f38dd" size="35" />
              // <Loader />
              <Text>{t('noTransactionText')}</Text>
            )
          ) : (
            <>
              <Transaction
                transactionList={sortedTransactions}
                ref={childRef}
              />{' '}
              <Pagination>
                <PaginationBtn type="button" onClick={() => previous(true)}>
                  <AiOutlineLeft />
                </PaginationBtn>
                <PaginationBtn type="button" onClick={() => next(true)}>
                  <AiOutlineRight />
                </PaginationBtn>
              </Pagination>
            </>
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};
