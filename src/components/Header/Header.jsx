import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import Logo from '../../images/Logo.svg';
import Exit from '../../images/Exit.svg';
import Settings from 'components/SettingsBtn/Settings';
import {
  HeaderSection,
  LogoStyle,
  ContainerLogo,
  LogoName,
  HeaderContainer,
  UserName,
  LogoutImg,
  LogoutButton,
  Logout,
} from './Header.styled';
import { Container } from 'stylesheet/Container.styled';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <ContainerLogo>
            <NavLink to="/wallet_frontend/home">
              <ContainerLogo>
                <LogoStyle src={Logo} alt="Logo" />
                <LogoName>Wallet</LogoName>
              </ContainerLogo>
            </NavLink>
          </ContainerLogo>
          <ContainerLogo>
            <UserName>{t('header.name')}</UserName>
            <Media queries={{ mobile: { maxWidth: 767 } }}>
              {matches =>
                matches.mobile ? (
                  <Settings />
                ) : (
                  <>
                    <Settings />
                    <LogoutButton>
                      <LogoutImg src={Exit} alt="Exit" />
                      <Logout>{t('header.exit')}</Logout>
                    </LogoutButton>
                  </>
                )
              }
            </Media>
          </ContainerLogo>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
