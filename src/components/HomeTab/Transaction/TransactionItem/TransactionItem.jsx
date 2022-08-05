import { Li, Data, Span, DelBtn, Icon } from './TransactionItem.styled';
import EllipsisText from 'react-ellipsis-text';

const TransactionItem = ({ transaction }) => {
  const { date, type, category, comment, sum, balance } = transaction;

  const newDate = new Date(date)
    .toISOString()
    .slice(2)
    .substring(0, 8)
    .split('-')
    .reverse()
    .join('.');
  return (
    <Li>
      <Data style={{ paddingTop: '16px', paddingBottom: '15px' }}>
        {newDate}
      </Data>
      <Data>{type}</Data>
      <Data>{category}</Data>
      <Data>
        <EllipsisText text={comment.toLowerCase()} length={20} />
      </Data>
      <Data>
        <Span income={type}>{sum}</Span>
      </Data>
      <Data>
        <span style={{ paddingRight: '50px' }}>{balance}</span>
      </Data>
      <DelBtn type="button">
        <Icon />
      </DelBtn>
    </Li>
  );
};
export default TransactionItem;
