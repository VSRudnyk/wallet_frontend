import Media from 'react-media';
import { FormRegistration } from 'components/RegistrationForm/RegistrationForm';
import {
  ContainerRegister,
  Logo,
  LogoText,
  LogoContainer,
  FormContainer,
  ImageContainer,
  Text,
  ImageSection,
  Container,
  ContainerRegisterForm,
} from './RegistrationPage.styled';
import LogoImg from '../../images/Logo.svg';

export const RegistrationPage = () => {
  return (
    <Container>
      <ContainerRegister>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainer />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
        <ContainerRegisterForm>
          <FormContainer>
            <LogoContainer>
              <Logo src={LogoImg} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <FormRegistration />
          </FormContainer>
        </ContainerRegisterForm>
      </ContainerRegister>
    </Container>
  );
};
