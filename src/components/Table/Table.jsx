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

export const Table = ({ tableData }) => {
  const [dataToRender, setDataToRender] = useState(null);

  const [categorySortedStatus, setCategorySortedStatus] = useState('');
  const [sumSortedStatus, setSumSortedStatus] = useState('');

  useEffect(() => {
    if (dataToRender === null) {
      setDataToRender(
        [...tableData].map(item => {
          item.categorySum = Number.parseFloat(item.categorySum);
          return item;
        })
      );
    }
  }, [dataToRender, tableData]);

  function sortByCategory() {
    if (categorySortedStatus === '' || categorySortedStatus === 'ZA') {
      const sortedData = [...tableData].sort((firstCategory, secondCategory) =>
        firstCategory.categoryName.localeCompare(secondCategory.categoryName)
      );
      setCategorySortedStatus('AZ');
      setSumSortedStatus('');

      setDataToRender(sortedData);
    }
    if (categorySortedStatus === 'AZ') {
      const sortedData = [...tableData].sort((firstCategory, secondCategory) =>
        secondCategory.categoryName.localeCompare(firstCategory.categoryName)
      );
      setCategorySortedStatus('ZA');
      //setSumSortedStatus('');

      setDataToRender(sortedData);
    }
  }

  function sortHelper(method) {
    const parsedData = tableData.map(item => {
      item.categorySum = Number.parseFloat(item.categorySum);
      return item;
    });

    switch (method) {
      case 'ascending':
        return [...parsedData].sort((a, b) => a.categorySum - b.categorySum);

      case 'descending':
        return [...parsedData].sort((a, b) => b.categorySum - a.categorySum);

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

    if (sumStr.length > 6) {
      const result = sumStr[0] + ' ' + sumStr.slice(1, sumStr.length);
      return result;
    }

    return sumStr;
  }

  return (
    <>
      <TableWrapper className="table-wrapper">
        <TableTittle className="table-tittle">
          <TableTittleBtn className="table-tittle-btn" onClick={sortByCategory}>
            Category
          </TableTittleBtn>
          <TableTittleBtn className="table-tittle-btn" onClick={sortBySum}>
            Summ
          </TableTittleBtn>
        </TableTittle>

        <TableContentList className="table-content-list">
          {dataToRender !== null &&
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
                      {categoryName}
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
              Expenses:
            </ResultItemTittle>
            <ResultItemValue
              className="result-item-value"
              color={'var(--pink)'}
            >
              22 549.24
            </ResultItemValue>
          </TableResultItem>

          <TableResultItem className="table-result-item">
            <ResultItemTittle className="result-item-tittle">
              Income:
            </ResultItemTittle>
            <ResultItemValue
              className="result-item-value"
              color={'var(--green)'}
            >
              27 350.00
            </ResultItemValue>
          </TableResultItem>
        </TableResultList>
      </TableWrapper>
    </>
  );
};
