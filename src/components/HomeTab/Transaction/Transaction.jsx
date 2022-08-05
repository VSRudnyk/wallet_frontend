import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import TransactionItem from './TransactionItem';
import { TableContainer, List, Li } from './Transaction.styled';

const Transaction = ({ transactionList }) => {
  const { t } = useTranslation();

  const columns = [
    {
      header: 'Date',
    },
    {
      header: 'Type',
    },
    {
      header: 'Category',
    },
    {
      header: 'Comment',
    },
    {
      header: 'Sum',
    },
    {
      header: 'Balance',
    },
  ];

  const tableHeaders = columns.map(({ header }) => {
    if (header === 'Balance') {
      return (
        <Li key={uuidv4()}>
          <span style={{ paddingRight: '50px' }}>
            {t(`${header.toLowerCase()}`)}
          </span>
        </Li>
      );
    }
    return <Li key={uuidv4()}>{t(`${header.toLowerCase()}`)}</Li>;
  });

  return (
    <TableContainer>
      <List>{tableHeaders}</List>
      <List>
        {transactionList.map(transaction => {
          return <TransactionItem key={uuidv4()} transaction={transaction} />;
        })}
      </List>
    </TableContainer>
  );
};

export default Transaction;
