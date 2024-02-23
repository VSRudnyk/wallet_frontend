import Media from 'react-media';
import { FormRegistration } from '../../components/Form';
import {
  ContainerPage,
  FormContainerRegsiter,
  Text,
  ImageSection,
  Container,
  FormWrapper,
} from './Page.styled';

const RegistrationPage = () => {
  return (
    <Container>
      <ContainerPage>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <Text>Registration Page</Text>
            </ImageSection>
          )}
        />
        <FormWrapper>
          <FormContainerRegsiter>
            <FormRegistration />
          </FormContainerRegsiter>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};

export default RegistrationPage;
