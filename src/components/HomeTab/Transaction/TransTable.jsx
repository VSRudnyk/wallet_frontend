import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useTranslation } from 'react-i18next';
import EllipsisText from 'react-ellipsis-text';
import { BsFillTrashFill } from 'react-icons/bs';

import { TableContainer, Table, Th, BodyTd } from './Transaction.styled';

const Transaction = ({ transactionList }) => {
  const { t } = useTranslation();
  const data = useMemo(() => transactionList, [transactionList]);
  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Comment',
        accessor: 'comment',
      },
      {
        Header: 'Sum',
        accessor: 'sum',
      },
      {
        Header: 'Balance',
        accessor: 'balance',
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>
                  {t(column.render('Header').toLowerCase())}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  const header = cell.column.Header;
                  switch (header) {
                    case 'Date':
                      let newValue = new Date(cell.render('Cell').props.value)
                        .toISOString()
                        .slice(2)
                        .substring(0, 8)
                        .split('-')
                        .reverse()
                        .join('.');
                      return (
                        <BodyTd
                          {...cell.getCellProps()}
                          style={{ paddingTop: '16px', paddingBottom: '15px' }}
                        >
                          {newValue}
                        </BodyTd>
                      );
                    case 'Type':
                      return (
                        <BodyTd {...cell.getCellProps()}>
                          {t(cell.render('Cell').props.value.toLowerCase())}
                        </BodyTd>
                      );
                    case 'Category':
                      return (
                        <BodyTd {...cell.getCellProps()}>
                          {t(cell.render('Cell').props.value.toLowerCase())}
                        </BodyTd>
                      );

                    case 'Comment':
                      return (
                        <BodyTd {...cell.getCellProps()}>
                          <EllipsisText
                            text={cell.render('Cell').props.value}
                            length={20}
                          />
                        </BodyTd>
                      );

                    case 'Sum':
                      const color =
                        row.values.type === 'income' ? '#24CCA7' : '#ff6596';
                      return (
                        <BodyTd
                          {...cell.getCellProps()}
                          style={{ color: color }}
                        >
                          {cell.render('Cell').props.value.toFixed(2)}
                        </BodyTd>
                      );
                    case 'Balance':
                      return (
                        <BodyTd {...cell.getCellProps()}>
                          {cell.render('Cell').props.value.toFixed(2)}
                          <BsFillTrashFill />
                        </BodyTd>
                      );

                    default:
                      return (
                        <BodyTd {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </BodyTd>
                      );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default Transaction;