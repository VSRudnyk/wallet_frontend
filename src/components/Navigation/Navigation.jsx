import { ReactComponent as HomeLink } from '../../images/Home.svg';
import { ReactComponent as StatisticsLink } from '../../images/Statistics.svg';
import { ReactComponent as CurrencyLink } from '../../images/Currency.svg';

import {
  NavigationContainer,
  NavigationButton,
  Link,
  LinkName,
  ButtonCurrency,
} from './Navigation.styled';

export const Navigation = ({ changeComponent, page }) => {
  return (
    <>
      <NavigationContainer page={page}>
        <NavigationButton id="home" onClick={changeComponent}>
          <Link page={page} to="/wallet_frontend">
            <HomeLink alt="Link to home page" />
            <LinkName>Home</LinkName>
          </Link>
        </NavigationButton>
        <NavigationButton>
          <Link to="/wallet_frontend/diagram">
            <StatisticsLink alt="Link to statistics page" />
            <LinkName>Statistics</LinkName>
          </Link>
        </NavigationButton>
        <NavigationButton id="currency" onClick={changeComponent}>
          <ButtonCurrency page={page}>
            <CurrencyLink alt="Link to currency page" />
          </ButtonCurrency>
        </NavigationButton>
      </NavigationContainer>
    </>
  );
};
