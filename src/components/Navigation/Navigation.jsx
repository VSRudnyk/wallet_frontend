import { ReactComponent as HomeLink } from '../../images/Home.svg';
import { ReactComponent as StatisticsLink } from '../../images/Statistics.svg';
import { ReactComponent as CurrencyLink } from '../../images/Currency.svg';
import { useTranslation } from 'react-i18next';

import {
  NavigationContainer,
  NavigationButton,
  Link,
  LinkName,
} from './Navigation.styled';

export const Navigation = ({ changeComponent, page }) => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationContainer page={page}>
        <NavigationButton id="home" onClick={changeComponent}>
          <Link to="/wallet_frontend/home">
            <HomeLink alt="Link to home page" />
            <LinkName>{t('navigation.home')}</LinkName>
          </Link>
        </NavigationButton>
        <NavigationButton>
          <Link to="/wallet_frontend/diagram">
            <StatisticsLink alt="Link to statistics page" />
            <LinkName>{t('navigation.statistics')}</LinkName>
          </Link>
        </NavigationButton>
        <NavigationButton id="currency" onClick={changeComponent}>
          <Link to="/wallet_frontend/currency">
            <CurrencyLink alt="Link to currency page" />
          </Link>
        </NavigationButton>
      </NavigationContainer>
    </>
  );
};
