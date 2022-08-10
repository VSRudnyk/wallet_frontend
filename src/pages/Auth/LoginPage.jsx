import Media from 'react-media';
import { LoginForm } from '../../components/Form';
import Logo from '../../components/Logo/Logo';
import {
  ContainerPage,
  FormContainer,
  ImageContainerLog,
  Text,
  ImageSection,
  Container,
  FormWrapper,
} from './Page.styled';

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
            <Logo />
            <LoginForm />
          </FormContainer>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default LoginPage;
