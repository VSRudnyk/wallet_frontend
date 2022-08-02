import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DiagramTabWrapper,
  DiagramButton,
  DiagramCustomSelect,
  DiagramTableBar,
  DiagramButtonsWrapper,
} from './DiagramTab.styled';
import { IconSVG } from 'stylesheet/IconSVG';
const Table = lazy(() => import('../Table' /* webpackChunkName: "Table" */));
const Chart = lazy(() => import('../Chart' /* webpackChunkName: "Chart" */));

export const DiagramTab = () => {
  const { t } = useTranslation();
  const reduxData = [
    {
      categoryColor: '#FED057',
      categoryName: 'Basic',
      categorySum: '8700.00',
    },
    {
      categoryColor: '#FFD8D0',
      categoryName: 'Products',
      categorySum: '3800.74',
    },
    {
      categoryColor: '#FD9498',
      categoryName: 'Car',
      categorySum: '1500.00',
    },
    {
      categoryColor: '#C5BAFF',
      categoryName: 'Health',
      categorySum: '800.00',
    },
    {
      categoryColor: '#6E78E8',
      categoryName: 'Kids',
      categorySum: '2208.50',
    },
    {
      categoryColor: '#4A56E2',
      categoryName: 'Home',
      categorySum: '300.00',
    },
    {
      categoryColor: '#81E1FF',
      categoryName: 'Education',
      categorySum: '3400.00',
    },
    {
      categoryColor: '#24CCA7',
      categoryName: 'Leisure',
      categorySum: '1230.00',
    },
    {
      categoryColor: '#00AD84',
      categoryName: 'Other',
      categorySum: '610.00',
    },
  ];

  return (
    <DiagramTabWrapper className="diagram-tab__wrapper">
      {/* тут должен быть компонент "Здоровенный разноцветный круг" */}
      <Chart />

      <DiagramTableBar className="diagram-tab__table-bar">
        <DiagramButtonsWrapper className="diagram-tab__buttons-wrapper">
          <DiagramButton className="diagram-btn">
            <DiagramCustomSelect
              defaultValue="Month"
              name="month"
              className="diagram-btn__select_month"
            >
              <option value="Month" disabled style={{ display: 'none' }}>
                {t('diagramTab.optionData.month')}
              </option>
              <option value="January">{t('diagramTab.optionData.jan')}</option>
              <option value="February">{t('diagramTab.optionData.feb')}</option>
              <option value="March">{t('diagramTab.optionData.mar')}</option>
              <option value="April">{t('diagramTab.optionData.apr')}</option>
              <option value="May">{t('diagramTab.optionData.may')}</option>
              <option value="June">{t('diagramTab.optionData.jun')}</option>
              <option value="July">{t('diagramTab.optionData.jul')}</option>
              <option value="August">{t('diagramTab.optionData.aug')}</option>
              <option value="September">
                {t('diagramTab.optionData.sep')}
              </option>
              <option value="October">{t('diagramTab.optionData.oct')}</option>
              <option value="November">{t('diagramTab.optionData.nov')}</option>
              <option value="December">{t('diagramTab.optionData.dec')}</option>
            </DiagramCustomSelect>
            <IconSVG id="icon-diagram-tab-arrow-down" />
          </DiagramButton>

          <DiagramButton className="diagram-btn">
            <DiagramCustomSelect
              defaultValue="Year"
              name="year"
              className="diagram-btn__select_year"
            >
              <option value="Year" disabled style={{ display: 'none' }}>
                {t('diagramTab.optionData.year')}
              </option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </DiagramCustomSelect>
            <IconSVG id="icon-diagram-tab-arrow-down" />
          </DiagramButton>
        </DiagramButtonsWrapper>

        <Table tableData={reduxData} />
      </DiagramTableBar>
    </DiagramTabWrapper>
  );
};
