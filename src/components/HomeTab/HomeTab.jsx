import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import {
  HomeTabWrapper,
  List,
  ListItem,
  Text,
  TempBtn,
} from './HomeTab.styled';
import Media from 'react-media';
import data from './transactions.json';

const lngs = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
};

const HomeTab = ({ page }) => {
  const { t, i18n } = useTranslation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length !== 0) {
      return;
    }
    setTransactions(state => [...state, ...data]);
  }, [transactions]);

  const sortedTransactions = [...transactions]
    .map(transaction => {
      return { ...transaction, date: new Date(transaction.date) };
    })
    .sort((item1, item2) => {
      return Number(item2.date) - Number(item1.date);
    })
    .map(transaction => {
      const newDate = transaction.date
        .toISOString()
        .substr(0, 10)
        .split('-')
        .reverse()
        .join('.');

      return { ...transaction, date: newDate };
    });

  const transactionItems = sortedTransactions.map(
    ({ date, type, category, comment, sum, balance, id }) => {
      return (
        <ListItem key={id}>
          <TransactionMobile
            date={date}
            type={type}
            category={category}
            comment={comment}
            sum={sum}
            balance={balance}
          />
        </ListItem>
      );
    }
  );

  return (
    <HomeTabWrapper page={page}>
      <div>
        {Object.keys(lngs).map(lng => (
          <TempBtn
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </TempBtn>
        ))}
      </div>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            transactions.length === 0 ? (
              <Text>{t('noTransactionText')}</Text>
            ) : (
              <List>{transactionItems}</List>
            )
          ) : transactions.length === 0 ? (
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
