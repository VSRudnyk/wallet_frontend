import Media from 'react-media';
import { LoginForm } from '../../components/Form';
import {
  ContainerPage,
  FormContainer,
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
              <Text>Register App</Text>
            </ImageSection>
          )}
        />
        <FormWrapper>
          <FormContainer>
            <LoginForm />
          </FormContainer>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default LoginPage;
