import Media from 'react-media';
import { FormRegistration } from 'components/RegistrationForm/RegistrationForm';
import {
  ContainerRegister,
  LogoReg,
  LogoText,
  LogoContainer,
  FormContainer,
  ImageContainer,
  Text,
  ImageSection,
  Container,
  ContainerRegisterForm,
} from './RegistrationPage.styled';
import Logo from '../images/Logo.svg';

export const RegistrationPage = () => {
  return (
    <Container>
      <ContainerRegister>
      <Media query="(min-width: 768px)" render={() =>
          (
            <ImageSection>
            <ImageContainer />
            <Text>Finance App</Text>
          </ImageSection>          )}
        />
        <ContainerRegisterForm>
          <FormContainer>
            <LogoContainer>
              <LogoReg src={Logo} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <FormRegistration />
          </FormContainer>
        </ContainerRegisterForm>
      </ContainerRegister>
    </Container>
  );
};
