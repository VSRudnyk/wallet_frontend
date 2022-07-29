import { List, ListItem, Span } from './Transaction.styled';
const Transaction = ({ date, type, category, comment, sum, balance }) => {
  return (
    <List>
      <ListItem>
        <Span>{date}</Span>
      </ListItem>
      <ListItem>
        <Span>{type}</Span>
      </ListItem>
      <ListItem>
        <Span>{category}</Span>
      </ListItem>
      <ListItem>
        <Span>{comment}</Span>
      </ListItem>
      <ListItem>
        <Span>{sum}</Span>
      </ListItem>
      <ListItem>
        <Span>{balance}</Span>
      </ListItem>
    </List>
  );
};

export default Transaction;
