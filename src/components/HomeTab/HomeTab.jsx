import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { useGetAllTransactionsQuery } from 'redux/authOperation';
import uniqid from 'uniqid';

import {
  HomeTabWrapper,
  List,
  ListItem,
  Text,
  TempBtn,
} from './HomeTab.styled';
import Media from 'react-media';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const HomeTab = ({ page }) => {
  const { data, isLoading, isSuccess } = useGetAllTransactionsQuery();

  const { t, i18n } = useTranslation();
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
                    <ListItem key={uniqid()}>
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

export default HomeTab;
