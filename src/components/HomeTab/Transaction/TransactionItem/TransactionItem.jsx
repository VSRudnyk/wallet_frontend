import { useTranslation } from 'react-i18next';
import { Li, Data, Span, DelBtn, Icon } from './TransactionItem.styled';
import EllipsisText from 'react-ellipsis-text';
import { useDeleteTransactionMutation } from 'redux/transactionsOperation';

const TransactionItem = ({ transaction }) => {
  const [deleteTransaction] = useDeleteTransactionMutation({
    refetchOnMountOrArgChange: true,
  });
  const { _id, date, type, category, comment, sum, balance } = transaction;
  const { t } = useTranslation();

  const newDate = new Date(date)
    .toISOString()
    .slice(2)
    .substring(0, 8)
    .split('-')
    .reverse()
    .join('.');
  return (
    <Li id={_id}>
      <Data style={{ paddingTop: '16px', paddingBottom: '15px' }}>
        {newDate}
      </Data>
      <Data>{t(`${type}`)}</Data>
      <Data>{t(`${category}`)}</Data>
      <Data>
        <EllipsisText text={comment.toLowerCase()} length={20} />
      </Data>
      <Data>
        <Span income={type}>{sum}</Span>
      </Data>
      <Data>
        <span style={{ paddingRight: '50px' }}>{balance}</span>
      </Data>
      <DelBtn
        type="button"
        onClick={() => {
          deleteTransaction(_id);
        }}
      >
        <Icon />
      </DelBtn>
    </Li>
  );
};
export default TransactionItem;
