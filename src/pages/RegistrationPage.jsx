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
  Container
} from './RegistrationPage.styled';
import Logo from '../images/Logo.svg';

export const RegistrationPage = () => {
  return (
    <Container>
    <ContainerRegister>
      <ImageSection>
        <ImageContainer />
        <Text>Finance App</Text>
      </ImageSection>
      <FormContainer>
        <LogoContainer>
          <LogoReg src={Logo} alt="Logo" />
          <LogoText>Wallet</LogoText>
        </LogoContainer>
        <FormRegistration />
      </FormContainer>
    </ContainerRegister>
    </Container>
  );
};
