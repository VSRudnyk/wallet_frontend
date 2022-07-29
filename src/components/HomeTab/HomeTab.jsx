import { useState, useEffect } from 'react';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import {
  List,
  ListItem,
  TransactionsContainer,
  TransactionsContainerItem,
} from './HomeTab.styled';
import Media from 'react-media';
import data from './transactions.json';

const HomeTab = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length !== 0) {
      return;
    }
    setTransactions([...data]);
  }, [transactions.length]);

  const sortedTransactions = [...transactions]
    .map(transaction => {
      return { ...transaction, date: new Date(transaction.date) };
    })
    .sort((item1, item2) => {
      return Number(item2.date) - Number(item1.date);
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
    <Media queries={{ mobile: { maxWidth: 767 } }}>
      {matches =>
        matches.mobile ? (
          <List>{transactionItems}</List>
        ) : (
          <TransactionsContainer>
            <TransactionsContainerItem style={{ position: 'fixed', zIndex: 1 }}>
              <Transaction
                date="Date"
                type="Type"
                category="Category"
                comment="Comment"
                sum="Sum"
                balance="Balance"
              />
            </TransactionsContainerItem>
            {transactionItems}
          </TransactionsContainer>
        )
      }
    </Media>
  );
};

export default HomeTab;
