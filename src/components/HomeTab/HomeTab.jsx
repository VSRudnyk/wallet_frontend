import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import { v4 as uuidv4 } from 'uuid';
import { HomeTabWrapper, List, ListItem } from './HomeTab.styled';
import Media from 'react-media';

export const HomeTab = ({ transactionsList }) => {
  return (
    <HomeTabWrapper>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            <List>
              {transactionsList.map(transaction => {
                return (
                  <ListItem key={uuidv4()}>
                    <TransactionMobile transaction={transaction} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Transaction transactionsList={transactionsList} />
          )
        }
      </Media>
    </HomeTabWrapper>
  );
};
