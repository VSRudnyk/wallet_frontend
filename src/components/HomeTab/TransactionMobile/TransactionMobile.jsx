import {
  List,
  ListItem,
  TransactionDescrp,
  TransactionData,
  Sum,
} from './TransactionMobile.styled';
import { v4 as uuidv4 } from 'uuid';
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
          </ListItem>
        );

      default:
        break;
    }
    return null;
  });

  return <List>{list}</List>;
};

export default TransactionMobile;
