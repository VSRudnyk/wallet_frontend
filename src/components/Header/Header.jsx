import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Exit from '../../images/Exit.svg';
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
            <NavLink to="/wallet_frontend/main">
              <ContainerLogo>
                <LogoStyle src={Logo} alt="Logo" />
                <LogoName>Wallet</LogoName>
              </ContainerLogo>
            </NavLink>
          </ContainerLogo>
          <ContainerLogo>
            <UserName>Name</UserName>
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
