import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import Logo from '../../images/Logo.svg';
import Exit from '../../images/Exit.svg';
import Settings from 'components/SettingsBtn/Settings';
import { useGetCurrentUserQuery } from 'redux/usersOperation';
import {
  ContainerLogo,
  HeaderContainer,
  HeaderSection,
  LogoName,
  LogoStyle,
  Logout,
  LogoutButton,
  LogoutImg,
  UserName,
} from './Header.styled';
import { Container } from 'stylesheet/Container.styled';
import { useLogoutMutation } from '../../redux/authOperation';

export const Header = () => {
  const [logout] = useLogoutMutation();
  const { data } = useGetCurrentUserQuery();

  const onLogoutHandler = async () => {
    await logout();
  };

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
            {/* {t('header.name')} */}
            <UserName>{data && data.data.user.name}</UserName>
            <Media queries={{ mobile: { maxWidth: 767 } }}>
              {matches =>
                matches.mobile ? (
                  <Settings />
                ) : (
                  <>
                    <Settings />
                    <LogoutButton onClick={onLogoutHandler}>
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
