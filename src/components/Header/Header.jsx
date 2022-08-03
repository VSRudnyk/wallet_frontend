import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Exit from '../../images/Exit.svg';
import LanguageSwitcher from 'components/LanguageSwitcher';
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
  const onLogoutHandler = async () => {
    await logout();
  };

  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <ContainerLogo>
            <NavLink to='/wallet_frontend/home'>
              <ContainerLogo>
                <LogoStyle src={Logo} alt='Logo' />
                <LogoName>Wallet</LogoName>
              </ContainerLogo>
            </NavLink>
          </ContainerLogo>
          <ContainerLogo>
            <UserName>Name</UserName>
            <LanguageSwitcher />
            <LogoutButton onClick={onLogoutHandler}>
              <LogoutImg src={Exit} alt='Exit' />
              <Logout>Exit</Logout>
            </LogoutButton>
          </ContainerLogo>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
