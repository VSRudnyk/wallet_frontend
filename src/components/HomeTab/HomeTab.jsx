import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction/Transaction';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';

import { HomeTabWrapper, List, ListItem, Text } from './HomeTab.styled';

export const HomeTab = ({ transactionsList }) => {
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
            <>
              <Transaction transactionsList={transactionsList} />
            </>
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};

HomeTab.propTypes = {
  transactionsList: PropTypes.arrayOf(
    PropTypes.shape({
      balance: PropTypes.number,
      category: PropTypes.string,
      comment: PropTypes.string,
      sum: PropTypes.number,
      date: PropTypes.string,
      owner: PropTypes.objectOf(PropTypes.string),
      type: PropTypes.oneOf(['income', 'expense']),
      _id: PropTypes.string,
    })
  ),
};
