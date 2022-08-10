import Media from 'react-media';
import { FormRegistration } from '../../components/Form';
import Logo from '../../components/Logo/Logo';
import {
  ContainerPage,
  FormContainerRegsiter,
  ImageContainerReg,
  Text,
  ImageSection,
  Container,
  FormWrapper,
  LogoContainer,
} from './Page.styled';

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
        <FormWrapper>
          <FormContainerRegsiter>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <FormRegistration />
          </FormContainerRegsiter>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default RegistrationPage;
