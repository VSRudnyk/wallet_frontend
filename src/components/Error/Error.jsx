import { Container } from 'stylesheet/Container.styled';
import Error from '../../images/Error.jpeg';
import {
  ErrorContainer,
  ErrorImage,
  ErrorText,
  BackToHome,
} from './Error.styled';

export const ErrorPage = () => {
  return (
    <Container>
      <ErrorText>
        This page does not exist. To return to the home page click on the{' '}
        <BackToHome to="/wallet_frontend/home">Home</BackToHome>
      </ErrorText>

      <ErrorContainer>
        <ErrorImage src={Error} />
      </ErrorContainer>
    </Container>
  );
};
