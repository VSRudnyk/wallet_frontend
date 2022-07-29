import {
  List,
  ListItem,
  TransactionDescrp,
  TransactionData,
  Sum,
} from './TransactionMobile.styled';
import EllipsisText from 'react-ellipsis-text';
const TransactionMobile = ({ date, type, category, comment, sum, balance }) => {
  const modifiedDate = date
    .toISOString()
    .substr(0, 10)
    .split('-')
    .reverse()
    .join('.');

  return (
    <List>
      <ListItem type={type}>
        <TransactionDescrp>Date</TransactionDescrp>
        <TransactionData>{modifiedDate}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>Type</TransactionDescrp>
        <TransactionData>{type}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>Category</TransactionDescrp>
        <TransactionData>{category}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>Comment</TransactionDescrp>
        <TransactionData>
          <EllipsisText text={comment} length={14} />
        </TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>Sum</TransactionDescrp>
        <TransactionData>
          <Sum income={type}>{sum}</Sum>
        </TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>Balance</TransactionDescrp>
        <TransactionData>{balance}</TransactionData>
      </ListItem>
    </List>
  );
};

export default TransactionMobile;
