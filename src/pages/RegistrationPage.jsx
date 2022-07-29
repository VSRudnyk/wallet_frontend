import { FormRegistration } from 'components/RegistrationForm/RegistrationForm';
import {
  ContainerRegister,
  LogoReg,
  LogoText,
  LogoContainer,
  FormContainer,
} from './RegistrationPage.styled';
import Logo from '../images/Logo.svg';

export const RegistrationPage = () => {
  return (
    <ContainerRegister>
      <FormContainer>
        <LogoContainer>
          <LogoReg src={Logo} alt="Logo" />
          <LogoText>Wallet</LogoText>
        </LogoContainer>
        <FormRegistration />
      </FormContainer>
    </ContainerRegister>
  );
};
