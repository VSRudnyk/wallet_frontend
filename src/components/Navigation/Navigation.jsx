import { ReactComponent as HomeLink } from '../../images/Home.svg';
import { ReactComponent as StatisticsLink } from '../../images/Statistics.svg';
import { ReactComponent as CurrencyLink } from '../../images/Currency.svg';
import {
  NavigationContainer,
  NavigationButton,
  Link,
  LinkName,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationButton>
        <Link to="/home">
          <HomeLink alt="Link to home page" />
          <LinkName>Home</LinkName>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/statistics">
          <StatisticsLink alt="Link to statistics page" />
          <LinkName>Statistics</LinkName>
        </Link>
      </NavigationButton>
      <NavigationButton>
        <Link to="/currency">
          <CurrencyLink alt="Link to currency page" />
        </Link>
      </NavigationButton>
    </NavigationContainer>
  );
};
