import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Exit from '../../images/Exit.svg';
import LanguageSwitcher from 'components/LanguageSwitcher';
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
            <UserName>Name</UserName>
            <LanguageSwitcher />
            <LogoutButton>
              <LogoutImg src={Exit} alt="Exit" />
              <Logout>Exit</Logout>
            </LogoutButton>
          </ContainerLogo>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
