import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { HomeTabWrapper, List, ListItem, Text } from './HomeTab.styled';
import Media from 'react-media';

export const HomeTab = ({ transactionsList, isLoading }) => {
  const { t } = useTranslation();
  return (
    <HomeTabWrapper>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            transactionsList.length === 0 ? (
              <Text>{t('noTransactionText')}</Text>
            ) : (
              <List>
                {transactionsList.map(transaction => {
                  return (
                    <ListItem key={uuidv4()}>
                      <TransactionMobile transaction={transaction} />
                    </ListItem>
                  );
                })}
              </List>
            )
          ) : transactionsList.length === 0 ? (
            <Text>{t('noTransactionText')}</Text>
          ) : (
            <Transaction transactionsList={transactionsList} />
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};
