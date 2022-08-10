import { LoginForm } from '../../components/Form';
import {
  ContainerPage,
  Logo,
  LogoText,
  LogoContainer,
  FormContainer,
  ImageContainerLog,
  Text,
  ImageSection,
  Container,
  ContainerForm,
} from './Page.styled';
import LogoSrc from '../../assets/images/Logo.svg';
import Media from 'react-media';

const LoginPage = () => {
  return (
    <Container>
      <ContainerPage>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainerLog />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
        <ContainerForm>
          <FormContainer>
            <LogoContainer>
              <Logo src={LogoSrc} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <LoginForm />
          </FormContainer>
        </ContainerForm>
      </ContainerPage>
    </Container>
  );
};

export default LoginPage;
