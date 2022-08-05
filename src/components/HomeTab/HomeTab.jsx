import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { useGetAllTransactionsQuery } from '../../redux/transactionsOperation';
import { Loader } from 'components/Loader';
import { v4 as uuidv4 } from 'uuid';

import { HomeTabWrapper, List, ListItem, Text } from './HomeTab.styled';
import Media from 'react-media';

export const HomeTab = ({ page }) => {
  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    isSuccess && setTransactions(data);
  }, [data, isLoading, isSuccess, transactions]);

  const sortedTransactions = [...transactions].sort((item1, item2) => {
    const date1 = new Date(item1.date);
    const date2 = new Date(item2.date);
    return Number(date2) - Number(date1);
  });

  return (
    <HomeTabWrapper page={page}>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            sortedTransactions.length === 0 ? (
              isLoading ? (
                <Loader color="#4a56e2" size="45px" />
              ) : (
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
              <Loader color="#4a56e2" size="45px" />
            ) : (
              <Text>{t('noTransactionText')}</Text>
            )
          ) : (
            <Transaction transactionList={sortedTransactions} />
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};
