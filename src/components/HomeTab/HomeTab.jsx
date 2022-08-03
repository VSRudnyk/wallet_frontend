import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { useGetAllTransactionsQuery } from '../../redux/transactionsOperation';
import { v4 as uuidv4 } from 'uuid';

import { HomeTabWrapper, List, ListItem, Text } from './HomeTab.styled';
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
    return Number(item2.date) - Number(item1.date);
  });

  return (
    <HomeTabWrapper page={page}>
      {/* <div>
        {Object.keys(lngs).map(lng => (
          <TempBtn
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </TempBtn>
        ))}
      </div> */}
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            sortedTransactions.length === 0 ? (
              <Text>{t('noTransactionText')}</Text>
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
            <Text>{t('noTransactionText')}</Text>
          ) : (
            <Transaction transactionList={sortedTransactions} />
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};

