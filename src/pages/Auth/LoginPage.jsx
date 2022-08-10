import { LoginForm } from '../../components/Form';
import {
  ContainerPage,
  FormContainer,
  ImageContainerLog,
  Text,
  ImageSection,
  Container,
  FormWrapper,
} from './Page.styled';
import Media from 'react-media';
import Logo  from '../../components/Logo/Logo';
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
