import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { useTranslation } from 'react-i18next';
import EllipsisText from 'react-ellipsis-text';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import {
  TableContainer,
  Table,
  Th,
  BodyTd,
  Pagination,
  PaginationBtn,
  PaginationSpan,
} from './Transaction.styled';

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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 7 },
    },
    usePagination
  );

  console.log(pageSize);
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
          {page.map(row => {
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
                        <BodyTd {...cell.getCellProps()}>{newValue}</BodyTd>
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
      <Pagination>
        <PaginationBtn onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <AiOutlineDoubleLeft />
        </PaginationBtn>
        <PaginationBtn
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <AiOutlineLeft />
        </PaginationBtn>
        <PaginationBtn onClick={() => nextPage()} disabled={!canNextPage}>
          <AiOutlineRight />
        </PaginationBtn>
        <PaginationBtn
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <AiOutlineDoubleRight />
        </PaginationBtn>
        <PaginationSpan>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </PaginationSpan>
      </Pagination>
    </TableContainer>
  );
};

export default Transaction;
