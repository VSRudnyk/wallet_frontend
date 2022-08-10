import { useTranslation } from 'react-i18next';
import { Li, Data, Span, DelBtn, Icon } from './TransactionItem.styled';
import EllipsisText from 'react-ellipsis-text';
import { useDeleteTransactionMutation } from 'redux/transactionsOperation';
import PropTypes from 'prop-types';

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
    <>
      <Li id={_id}>
        <Data style={{ paddingTop: '16px', paddingBottom: '15px' }}>
          {newDate}
        </Data>
        <Data>{t(`${type}`)}</Data>
        <Data>{t(`addtransaction.options.${category}`)}</Data>

        <Data>
          <EllipsisText
            text={comment.toLowerCase()}
            length={20}
            tooltop={comment}
          />
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
          id="del_btn"
          type="button"
          onClick={() => {
            promptBeforeDeleteContactModal(_id);
          }}
        >
          <Icon id="icon" />
        </DelBtn>
      </Li>
    </>
  );
};
TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    balance: PropTypes.number,
    category: PropTypes.string,
    comment: PropTypes.string,
    sum: PropTypes.number,
    date: PropTypes.string,
    owner: PropTypes.objectOf(PropTypes.string),
    type: PropTypes.oneOf(['income', 'expense']),
    _id: PropTypes.string,
  }),
};
export default TransactionItem;
