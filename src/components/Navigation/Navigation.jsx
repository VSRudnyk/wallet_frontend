import { ReactComponent as HomeLink } from '../../assets/images/Home.svg';
import { useTranslation } from 'react-i18next';

import {
  NavigationContainer,
  NavigationButton,
  Link,
  LinkName,
} from './Navigation.styled';

export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavigationContainer>
        <NavigationButton>
          <Link to="/testApp/home">
            <HomeLink alt="Link to home page" />
            <LinkName>{t('navigation.home')}</LinkName>
          </Link>
        </NavigationButton>
      </NavigationContainer>
    </>
  );
};
