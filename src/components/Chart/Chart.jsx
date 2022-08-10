import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Container, ChartContainer, Text, Label } from './Chart.styled';
import { Loader } from 'components/Loader';
import noDataFound from '../../assets/images/noDataFound.jpg';

ChartJS.register(ArcElement, Tooltip, Legend);

function sumConverter(sum) {
  const sumStr = sum.toFixed(2).toString();

  switch (sumStr.length) {
    case 7:
      return sumStr[0] + ' ' + sumStr.slice(1, sumStr.length);
    case 8:
      return sumStr[0] + sumStr[1] + ' ' + sumStr.slice(2, sumStr.length);
    case 9:
      return (
        sumStr[0] + sumStr[1] + sumStr[2] + ' ' + sumStr.slice(3, sumStr.length)
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

export function Chart({ tableCategories = [], tableExpenseSum = 0 }) {
  const [categoryName, setCategoryName] = useState(null);
  const [categoryColor, setCategoryColor] = useState(null);
  const [categorySum, setCategorySum] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (tableCategories) {
      setCategoryName(
        tableCategories.map(item =>
          t(`addtransaction.options.${item.categoryName}`)
        )
      );
      setCategoryColor(tableCategories.map(item => item.categoryColor));
      setCategorySum(tableCategories.map(item => item.categorySum));
    }
  }, [t, tableCategories]);

  const [chartData, setChartData] = useState({
    labels: [
      'Basic',
      'Products',
      'Car',
      'Health',
      'Kids',
      'Home',
      'Education',
      'Leisure',
      'Other',
    ],
    datasets: [
      {
        data: [0],
        backgroundColor: ['#FED057'],
        hoverOffset: 5,
        borderWidth: 0,
        cutout: '70%',
        radius: '95%',
      },
    ],
  });

  useEffect(() => {
    if (categoryColor && categoryName && categorySum) {
      setChartData({
        labels: categoryName,
        datasets: [
          {
            data: categorySum,
            backgroundColor: categoryColor,
            hoverOffset: 5,
            borderWidth: 0,
            cutout: '70%',
            radius: '95%',
          },
        ],
      });
    }
  }, [categoryColor, categoryName, categorySum]);

  const [chartOption] = useState({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (toolTipItem) {
            return `${toolTipItem.label}: ₴ ${sumConverter(
              toolTipItem.parsed
            )}`;
          },
        },
      },
    },
  });

  return (
    <Container>
      <Label>{t('statistics.header')}</Label>
      <ChartContainer>
        {!tableCategories && <Loader color="#4a56e2" size="100px" />}
        {categorySum?.length === 0 && (
          <img src={noDataFound} alt={t('errorPage.alt')} />
        )}
        {tableCategories && categorySum?.length !== 0 && (
          <>
            <Doughnut data={chartData} options={chartOption} />
            <Text>₴{sumConverter(tableExpenseSum)}</Text>
          </>
        )}
      </ChartContainer>
    </Container>
  );
}
