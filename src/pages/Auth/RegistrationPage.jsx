import Media from 'react-media';
import { FormRegistration } from 'components/Form';

import {
  ContainerPage,
  Logo,
  LogoText,
  LogoContainer,
  FormContainerRegsiter,
  ImageContainerReg,
  Text,
  ImageSection,
  Container,
  ContainerForm,
} from './Page.styled';
import LogoImg from '../../images/Logo.svg';

const RegistrationPage = () => {
  return (
    <Container>
      <ContainerPage>
        <Media 
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainerReg />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
        <ContainerForm>
          <FormContainerRegsiter>
            <LogoContainer>
              <Logo src={LogoImg} alt="Logo" />
              <LogoText>Wallet</LogoText>
            </LogoContainer>
            <FormRegistration />
          </FormContainerRegsiter>
        </ContainerForm>
      </ContainerPage>
    </Container>
  );
};

export default RegistrationPage;
