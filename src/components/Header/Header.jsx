import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/Logo.svg';
import Exit from '../../assets/images/Exit.svg';
import Settings from 'components/SettingsBtn/Settings';
import { useGetCurrentUserQuery } from 'redux/usersOperation';
import Notiflix from 'notiflix';
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
import { useState } from 'react';

export const Header = () => {
  const [logout] = useLogoutMutation();
  const { data } = useGetCurrentUserQuery();
  const [show, setShow] = useState(false);

  Notiflix.Confirm.init({
    width: '300px',
    fontFamily: 'Circe',
    titleFontSize: '18px',
    okButtonBackground: '#24cca7',
    cancelButtonBackground: '#ff6596',
  });

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
            <UserName>{data && data.data.user.name}</UserName>
            <Media queries={{ mobile: { maxWidth: 767 } }}>
              {matches =>
                matches.mobile ? (
                  <Settings />
                ) : (
                  <>
                    <Settings />
                    <LogoutButton onClick={() => setShow(!show)}>
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
      {show &&
        Notiflix.Confirm.show(
          'Wallet Confirm',
          'Do you realy want exit?',
          'Cancel',
          'Exit',
          function cancelCb() {
            Notiflix.Confirm.show(false);
            setShow(false);
          },
          function okCb() {
            logout();
          },
          {}
        )}
    </HeaderSection>
  );
};
