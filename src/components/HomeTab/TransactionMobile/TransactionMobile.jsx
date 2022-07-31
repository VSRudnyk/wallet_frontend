import {
  List,
  ListItem,
  TransactionDescrp,
  TransactionData,
  Sum,
} from './TransactionMobile.styled';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';

const TransactionMobile = ({ date, type, category, comment, sum, balance }) => {
  const { t } = useTranslation();

  return (
    <List>
      <ListItem type={type}>
        <TransactionDescrp>{t('date')}</TransactionDescrp>
        <TransactionData>{date}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>{t('type')}</TransactionDescrp>
        <TransactionData>{type}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>{t('category')}</TransactionDescrp>
        <TransactionData>{t(category.toLowerCase())}</TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>{t('comment')}</TransactionDescrp>
        <TransactionData>
          <EllipsisText text={comment} length={14} />
        </TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>{t('sum')}</TransactionDescrp>
        <TransactionData>
          <Sum income={type}>{sum}</Sum>
        </TransactionData>
      </ListItem>
      <ListItem type={type}>
        <TransactionDescrp>{t('balance')}</TransactionDescrp>
        <TransactionData>{balance}</TransactionData>
      </ListItem>
    </List>
  );
};

export default TransactionMobile;
