import { useDeleteTransactionMutation } from 'redux/transactionsOperation';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';

import {
  List,
  ListItem,
  TransactionDescrp,
  TransactionData,
  Sum,
  Icon,
  DelBtn,
} from './TransactionMobile.styled';

Notiflix.Confirm.init({
  okButtonBackground: '#ff6596',
});

const TransactionMobile = ({ transaction }) => {
  const [deleteTransaction] = useDeleteTransactionMutation({
    refetchOnMountOrArgChange: true,
  });
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
  const { _id, date, type, category, comment, sum, balance } = transaction;

  const list = Object.entries({
    _id,
    date,
    type,
    category,
    comment,
    sum,
    balance,
  }).map(([key, value]) => {
    switch (key) {
      case 'date':
        let newValue = new Date(value)
          .toISOString()
          .slice(2)
          .substring(0, 8)
          .split('-')
          .reverse()
          .join('.');
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{`${newValue}`}</TransactionData>
          </ListItem>
        );
      case 'type':
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{t(`${value}`)}</TransactionData>
          </ListItem>
        );
      case 'category':
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{t(`${value.toLowerCase()}`)}</TransactionData>
          </ListItem>
        );
      case 'comment':
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>
              <EllipsisText text={`${value}`} length={20} />
            </TransactionData>
          </ListItem>
        );
      case 'sum':
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>
              <Sum income={type}>{`${value.toFixed(2)}`}</Sum>
            </TransactionData>
          </ListItem>
        );
      case 'balance':
        return (
          <ListItem key={uuidv4()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{`${value.toFixed(2)}`}</TransactionData>
            <DelBtn
              type="button"
              onClick={() => {
                promptBeforeDeleteContactModal(_id);
              }}
            >
              <Icon />
            </DelBtn>
          </ListItem>
        );

      default:
        break;
    }
    return null;
  });

  return <List>{list}</List>;
};
TransactionMobile.propTypes = {
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
export default TransactionMobile;
