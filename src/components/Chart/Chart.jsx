import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Container, ChartContainer, Text, Label } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const { t } = useTranslation();
  const [chartData] = useState({
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
        data: [
          8700.0, 3800.74, 1500.0, 800.0, 2208.5, 300.0, 3400.0, 1230.0, 610.0,
        ],
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        hoverOffset: 5,
        borderWidth: 0,
        cutout: '70%',
        radius: '95%',
      },
    ],
  });

  const [chartOption] = useState({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (toolTipItem) {
            return `${t(
              `diagramTab.reduxData.${toolTipItem.label.toLowerCase()}`
            )}: ₴ ${toolTipItem.formattedValue}`;
          },
        },
      },
    },
  });

  return (
    <Container>
      <Label>{t('statistics.header')}</Label>
      <ChartContainer>
        <Doughnut data={chartData} options={chartOption} />
        <Text>₴ 24 000.00</Text>
      </ChartContainer>
    </Container>
  );
}
