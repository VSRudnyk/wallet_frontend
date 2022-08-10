import { lazy, useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '../../redux/categoriesOperation';
import { useTranslation } from 'react-i18next';

import { CustomSelect } from 'components/DiagramTab/NewSelectButton/CustomSelect';
import {
  DiagramTabWrapper,
  DiagramTableBar,
  DiagramButtonsWrapper,
  StatisticsContainer,
} from './DiagramTab.styled';
import { colorizedCategory } from 'components/Navigation/helpers/colorizedCategory';

const Table = lazy(() => import('../Table' /* webpackChunkName: "Table" */));
const Chart = lazy(() => import('../Chart' /* webpackChunkName: "Chart" */));

export const DiagramTab = () => {
  const { data: reduxData } = useGetAllCategoriesQuery();

  const { t } = useTranslation();
  const [tableCategories, setTableCategories] = useState('');
  const [tableIncomeSum, setTableIncomeSum] = useState(0);
  const [tableExpenseSum, setTableExpenseSum] = useState(0);

  const [monthSelectedValue, setMonthSelectedValue] = useState(null);
  const [yearSelectedValue, setYearSelectedValue] = useState(null);

  const monthDataSet = {
    tittle: 'month',
    data: [
      { text: t('diagramTab.optionData.jan'), value: 1, id: 'jan' },
      { text: t('diagramTab.optionData.feb'), value: 2, id: 'feb' },
      { text: t('diagramTab.optionData.mar'), value: 3, id: 'mar' },
      { text: t('diagramTab.optionData.apr'), value: 4, id: 'apr' },
      { text: t('diagramTab.optionData.may'), value: 5, id: 'may' },
      { text: t('diagramTab.optionData.jun'), value: 6, id: 'jun' },
      { text: t('diagramTab.optionData.jul'), value: 7, id: 'jul' },
      { text: t('diagramTab.optionData.aug'), value: 8, id: 'aug' },
      { text: t('diagramTab.optionData.sep'), value: 9, id: 'sep' },
      { text: t('diagramTab.optionData.oct'), value: 10, id: 'oct' },
      { text: t('diagramTab.optionData.nov'), value: 11, id: 'nov' },
      { text: t('diagramTab.optionData.dec'), value: 12, id: 'dec' },
    ],
  };

  const yearDataSet = {
    tittle: 'year',
    data: [
      { text: '2019', value: 2019, id: '19' },
      { text: '2020', value: 2020, id: '20' },
      { text: '2021', value: 2021, id: '21' },
      { text: '2022', value: 2022, id: '22' },
    ],
  };
  function incomeExpenseFilter(type, data) {
    switch (type) {
      case 'income':
        return data.filter(item => item && item._id.type === 'income');

      case 'expense':
        return data.filter(item => item && item._id.type === 'expense');

      default:
        console.log('incorrect type of operation');
    }
  }
  function onDateFilter(date, data) {
    const { month, year } = date;

    if (month === null && year === null) {
      const result = data;
      return result;
    }

    if (month !== null && year === null) {
      const result = data.filter(item => item._id.month === Number(month));
      return result;
    }

    if (month === null && year !== null) {
      const result = data.filter(item => item._id.year === Number(year));
      return result;
    }

    if (month !== null && year !== null) {
      const result = data.filter(
        item =>
          item._id.month === Number(month) && item._id.year === Number(year)
      );
      return result;
    }

    console.log('incorrect arguments');
  }

  useEffect(() => {
    function sumTheSameCategories(data) {
      let sumaryData = [];

      for (let item of data) {
        if (sumaryData.length === 0) {
          sumaryData = [
            {
              categoryName: item.category,
              categorySum: item.sum,
              categoryColor: colorizedCategory(item.category),
            },
          ];
        } else {
          const exisingItemOnsumaryData = sumaryData.find(
            element => element.categoryName === item.category
          );

          if (exisingItemOnsumaryData !== undefined) {
            exisingItemOnsumaryData.categorySum += item.sum;
          } else {
            sumaryData = [
              ...sumaryData,
              {
                categoryName: item.category,
                categorySum: item.sum,
                categoryColor: colorizedCategory(item.category),
              },
            ];
          }
        }
      }

      return sumaryData;
    }

    if (reduxData === undefined) {
      return;
    }
    if (tableCategories !== '') {
      return;
    }

    const expenseCategiries = incomeExpenseFilter('expense', reduxData);
    const incomeCategiries = incomeExpenseFilter('income', reduxData);

    const expenseCategiriesTotalSum = expenseCategiries.reduce(
      (total, item) => (total += item.totalPrice),
      0
    );
    const incomeCategiriesTotalSum = incomeCategiries.reduce(
      (total, item) => (total += item.totalPrice),
      0
    );

    const allCategoriesInOne = expenseCategiries.reduce(
      (result, item) => (result = [...result, ...item.category]),
      []
    );
    const sumaryCategories = sumTheSameCategories(allCategoriesInOne);

    setTableCategories(sumaryCategories);
    setTableExpenseSum(expenseCategiriesTotalSum);
    setTableIncomeSum(incomeCategiriesTotalSum);
  }, [reduxData, t, tableCategories]);

  useEffect(() => {
    function sumTheSameCategories(data) {
      let sumaryData = [];

      for (let item of data) {
        if (sumaryData.length === 0) {
          sumaryData = [
            {
              categoryName: item.category,
              categorySum: item.sum,
              categoryColor: colorizedCategory(item.category),
            },
          ];
        } else {
          const exisingItemOnsumaryData = sumaryData.find(
            element => element.categoryName === item.category
          );

          if (exisingItemOnsumaryData !== undefined) {
            exisingItemOnsumaryData.categorySum += item.sum;
          } else {
            sumaryData = [
              ...sumaryData,
              {
                categoryName: item.category,
                categorySum: item.sum,
                categoryColor: colorizedCategory(item.category),
              },
            ];
          }
        }
      }

      return sumaryData;
    }

    if (monthSelectedValue === null && yearSelectedValue === null) {
      return;
    }

    const onDateFilteredData = onDateFilter(
      { month: monthSelectedValue, year: yearSelectedValue },
      reduxData
    );

    const expenseCategiries = incomeExpenseFilter(
      'expense',
      onDateFilteredData
    );
    const incomeCategiries = incomeExpenseFilter('income', onDateFilteredData);

    const expenseCategiriesTotalSum = expenseCategiries.reduce(
      (total, item) => (total += item.totalPrice),
      0
    );
    const incomeCategiriesTotalSum = incomeCategiries.reduce(
      (total, item) => (total += item.totalPrice),
      0
    );

    const allCategoriesInOne = expenseCategiries.reduce(
      (result, item) => (result = [...result, ...item.category]),
      []
    );
    const sumaryCategories = sumTheSameCategories(allCategoriesInOne);

    setTableCategories(sumaryCategories);
    setTableExpenseSum(expenseCategiriesTotalSum);
    setTableIncomeSum(incomeCategiriesTotalSum);
  }, [monthSelectedValue, reduxData, t, yearSelectedValue]);

  return (
    <StatisticsContainer>
      <Chart
        tableCategories={tableCategories}
        tableExpenseSum={tableExpenseSum}
      />
      <DiagramTabWrapper className="diagram-tab__wrapper">
        <DiagramTableBar className="diagram-tab__table-bar">
          <DiagramButtonsWrapper className="diagram-tab__buttons-wrapper">
            <CustomSelect
              items={yearDataSet}
              changeValue={setYearSelectedValue}
            />
            <CustomSelect
              items={monthDataSet}
              changeValue={setMonthSelectedValue}
            />
          </DiagramButtonsWrapper>

          <Table
            tableCategories={tableCategories}
            tableIncomeSum={tableIncomeSum}
            tableExpenseSum={tableExpenseSum}
          />
        </DiagramTableBar>
      </DiagramTabWrapper>
    </StatisticsContainer>
  );
};
