import { LoginForm } from '../../components/LoginForm/LoginForm';
import {
  ContainerLogin,
  LogoLogin,
  LogoText,
  LogoContainer,
  FormContainer,
  ImageContainer,
  Text,
  ImageSection,
  Container,
  ContainerLoginForm,
} from './LoginPage.styled';
import Logo from '../../images/Logo.svg';

export const LoginPage = () => {
  return (
    <Container>
      <ContainerLogin>
        <ImageSection>
          <ImageContainer />
          <Text>Finance App</Text>
        </ImageSection>
        <ContainerLoginForm>
          <FormContainer>
            <LogoContainer>
              <LogoLogin src={Logo} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <LoginForm />
          </FormContainer>
        </ContainerLoginForm>
      </ContainerLogin>
    </Container>
  );
};
