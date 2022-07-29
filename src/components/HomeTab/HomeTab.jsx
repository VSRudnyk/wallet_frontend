import { useState, useEffect } from 'react';
import TransactionMobile from './TransactionMobile/TransactionMobile';
import Transaction from './Transaction';
import {
  List,
  ListItem,
  TransactionsContainer,
  TransactionsContainerItem,
  Text,
  TempBtn,
} from './HomeTab.styled';
import Media from 'react-media';
import data from './transactions.json';

const HomeTab = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length !== 0) {
      return;
    }
    // setTransactions(state => [...state, ...data]);
  }, [transactions]);

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

  const addData = () => {
    setTransactions(state => [...state, ...data]);
  };
  const removeData = () => {
    setTransactions([]);
  };

  return (
    <>
      <TempBtn type="button" onClick={addData}>
        get data
      </TempBtn>
      <TempBtn type="button" onClick={removeData}>
        delete data
      </TempBtn>

      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches =>
          matches.mobile ? (
            transactions.length === 0 ? (
              <Text>
                You don't have any transactions yet. please use "add button"
                below to get started.
              </Text>
            ) : (
              <List>{transactionItems}</List>
            )
          ) : transactions.length === 0 ? (
            <Text>
              You don't have any transactions yet. please use "add button" below
              to get started.
            </Text>
          ) : (
            <TransactionsContainer style={{}}>
              <TransactionsContainerItem
                style={{ position: 'fixed', zIndex: 1 }}
              >
                <Transaction
                  date="Date"
                  type="Type"
                  category="Category"
                  comment="Comment"
                  sum="Sum"
                  balance="Balance"
                />
              </TransactionsContainerItem>
              <List>{transactionItems}</List>
            </TransactionsContainer>
          )
        }
      </Media>
    </>
  );
};

export default HomeTab;
