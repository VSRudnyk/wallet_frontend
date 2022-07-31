import {
  List,
  ListItem,
  TransactionDescrp,
  TransactionData,
  Sum,
} from './TransactionMobile.styled';
import uniqid from 'uniqid';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';

const TransactionMobile = ({ obj }) => {
  const { t } = useTranslation();
  const { date, type, category, comment, sum, balance } = obj;

  const list = Object.entries({
    date,
    type,
    category,
    comment,
    sum,
    balance,
  }).map(([key, value]) => {
    switch (key) {
      case 'date':
        let newValue = value
          .slice(2)
          .substring(0, 8)
          .split('-')
          .reverse()
          .join('.');
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{`${newValue}`}</TransactionData>
          </ListItem>
        );
      case 'type':
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{t(`${value}`)}</TransactionData>
          </ListItem>
        );
      case 'category':
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{t(`${value}`)}</TransactionData>
          </ListItem>
        );
      case 'comment':
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>
              <EllipsisText text={`${value}`} length={20} />
            </TransactionData>
          </ListItem>
        );
      case 'sum':
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>
              <Sum income={type}>{`${value}`}</Sum>
            </TransactionData>
          </ListItem>
        );
      case 'balance':
        return (
          <ListItem key={uniqid()} type={type}>
            <TransactionDescrp>{t(`${key}`)}</TransactionDescrp>
            <TransactionData>{`${value}`}</TransactionData>
          </ListItem>
        );

      default:
        break;
    }
  });

  return <List>{list}</List>;
};

export default TransactionMobile;
