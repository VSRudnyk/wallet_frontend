import {
  TableWrapper,
  TableTittle,
  TableTittleBtn,
  TableContentList,
  TableContentItem,
  ItemCategoryWrapper,
  CategoryColorMark,
  CategoryName,
  ItemSum,
  TableResultList,
  TableResultItem,
  ResultItemTittle,
  ResultItemValue,
} from './Table.styled';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Table = ({
  tableCategories = [],
  tableExpenseSum = 0,
  tableIncomeSum = 0,
}) => {
  const [dataToRender, setDataToRender] = useState('');

  const [categorySortedStatus, setCategorySortedStatus] = useState('');
  const [sumSortedStatus, setSumSortedStatus] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (tableCategories === []) {
      return;
    }
    setDataToRender(tableCategories);
  }, [tableCategories]);

  function sortByCategory() {
    if (categorySortedStatus === '' || categorySortedStatus === 'ZA') {
      const sortedData = [...tableCategories].sort(
        (firstCategory, secondCategory) =>
          firstCategory.categoryName.localeCompare(secondCategory.categoryName)
      );
      setCategorySortedStatus('AZ');
      setSumSortedStatus('');

      setDataToRender(sortedData);
    }
    if (categorySortedStatus === 'AZ') {
      const sortedData = [...tableCategories].sort(
        (firstCategory, secondCategory) =>
          secondCategory.categoryName.localeCompare(firstCategory.categoryName)
      );
      setCategorySortedStatus('ZA');
      //setSumSortedStatus('');

      setDataToRender(sortedData);
    }
  }

  function sortHelper(method) {
    switch (method) {
      case 'ascending':
        return [...dataToRender].sort((a, b) => a.categorySum - b.categorySum);

      case 'descending':
        return [...dataToRender].sort((a, b) => b.categorySum - a.categorySum);

      default:
        console.log('incorrect method');
    }
  }

  function sortBySum() {
    let sortedResult = null;

    switch (sumSortedStatus) {
      case '':
        sortedResult = sortHelper('ascending');
        setSumSortedStatus('increment');
        setCategorySortedStatus('');
        break;

      case 'decrement':
        sortedResult = sortHelper('ascending');
        setSumSortedStatus('increment');
        setCategorySortedStatus('');
        break;

      case 'increment':
        sortedResult = sortHelper('descending');
        setSumSortedStatus('decrement');
        break;

      default:
        console.log('error');
    }

    setDataToRender(sortedResult);
  }

  function sumConverter(sum) {
    const sumStr = sum.toFixed(2).toString();

    switch (sumStr.length) {
      case 7:
        return sumStr[0] + ' ' + sumStr.slice(1, sumStr.length);
      case 8:
        return sumStr[0] + sumStr[1] + ' ' + sumStr.slice(2, sumStr.length);
      case 9:
        return (
          sumStr[0] +
          sumStr[1] +
          sumStr[2] +
          ' ' +
          sumStr.slice(3, sumStr.length)
        );
      case 10:
        return (
          sumStr[0] +
          ' ' +
          sumStr[1] +
          sumStr[2] +
          sumStr[3] +
          ' ' +
          sumStr.slice(4, sumStr.length)
        );
      case 11:
        return (
          sumStr[0] +
          sumStr[1] +
          ' ' +
          sumStr[2] +
          sumStr[3] +
          sumStr[4] +
          ' ' +
          sumStr.slice(5, sumStr.length)
        );
      case 12:
        return (
          sumStr[0] +
          sumStr[1] +
          sumStr[2] +
          ' ' +
          sumStr[3] +
          sumStr[4] +
          sumStr[5] +
          ' ' +
          sumStr.slice(6, sumStr.length)
        );
      case 13:
        return (
          sumStr[0] +
          ' ' +
          sumStr[1] +
          sumStr[2] +
          sumStr[3] +
          ' ' +
          sumStr[4] +
          sumStr[5] +
          sumStr[6] +
          ' ' +
          sumStr.slice(7, sumStr.length)
        );
      default:
        return sumStr;
    }
  }

  return (
    <>
      <TableWrapper className="table-wrapper">
        <TableTittle className="table-tittle">
          <TableTittleBtn className="table-tittle-btn" onClick={sortByCategory}>
            {t('table.category')}
          </TableTittleBtn>
          <TableTittleBtn className="table-tittle-btn" onClick={sortBySum}>
            {t('table.sum')}
          </TableTittleBtn>
        </TableTittle>

        <TableContentList className="table-content-list">
          {dataToRender !== '' &&
            dataToRender.map(({ categoryColor, categoryName, categorySum }) => {
              return (
                <TableContentItem
                  className="table-content-item"
                  key={categoryName}
                >
                  <ItemCategoryWrapper className="item-category-wrapper">
                    <CategoryColorMark
                      background={categoryColor}
                    ></CategoryColorMark>
                    <CategoryName className="category-name">
                      {t(`addtransaction.options.${categoryName}`)}
                    </CategoryName>
                  </ItemCategoryWrapper>
                  <ItemSum>{sumConverter(categorySum)}</ItemSum>
                </TableContentItem>
              );
            })}
        </TableContentList>

        <TableResultList className="table-result-list">
          <TableResultItem className="table-result-item">
            <ResultItemTittle className="result-item-tittle">
              {t('table.expenses')}:
            </ResultItemTittle>
            <ResultItemValue
              className="result-item-value"
              color={'var(--pink)'}
            >
              {sumConverter(tableExpenseSum)}
            </ResultItemValue>
          </TableResultItem>

          <TableResultItem className="table-result-item">
            <ResultItemTittle className="result-item-tittle">
              {t('table.income')}:
            </ResultItemTittle>
            <ResultItemValue
              className="result-item-value"
              color={'var(--green)'}
            >
              {sumConverter(tableIncomeSum)}
            </ResultItemValue>
          </TableResultItem>
        </TableResultList>
      </TableWrapper>
    </>
  );
};
