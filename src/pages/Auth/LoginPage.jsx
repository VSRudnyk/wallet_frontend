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
  FormWrapper,
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
        <FormWrapper>
          <FormContainer>
            <LogoContainer>
              <Logo src={LogoSrc} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <LoginForm />
          </FormContainer>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default LoginPage;
