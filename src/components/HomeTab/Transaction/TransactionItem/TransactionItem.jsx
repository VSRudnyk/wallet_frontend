import { useTranslation } from 'react-i18next';
import { Li, Data, Span, DelBtn, Icon } from './TransactionItem.styled';
import EllipsisText from 'react-ellipsis-text';
import { useDeleteTransactionMutation } from 'redux/transactionsOperation';
import Notiflix from 'notiflix';

Notiflix.Confirm.init({
  okButtonBackground: '#ff6596',
});

const TransactionItem = ({ transaction }) => {
  const [deleteTransaction] = useDeleteTransactionMutation({
    refetchOnMountOrArgChange: true,
  });
  const { _id, date, type, category, comment, sum, balance } = transaction;
  const { t } = useTranslation();

  const promptBeforeDeleteContactModal = id => {
    Notiflix.Confirm.show(
      t('deleteprompt.sure'),
      t('deleteprompt.irrevertable'),
      t('deleteprompt.delete'),
      t('deleteprompt.cancel'),
      function okCb() {
        deleteTransaction(id);
      },
      function notOkCb() {
        return;
      }
    );
  };

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
      <Data>{t(`${category.toLowerCase()}`)}</Data>
      <Data>
        <EllipsisText text={comment.toLowerCase()} length={20} />
      </Data>
      <Data>
        <Span income={type}>
          <EllipsisText text={sum.toFixed(2).toString()} length={10} />
        </Span>
      </Data>
      <Data>
        <span style={{ paddingRight: '50px' }}>
          <EllipsisText text={balance.toFixed(2).toString()} length={10} />
        </span>
      </Data>
      <DelBtn
        type="button"
        onClick={() => {
          promptBeforeDeleteContactModal(_id);
        }}
      >
        <Icon />
      </DelBtn>
    </Li>
  );
};
export default TransactionItem;
