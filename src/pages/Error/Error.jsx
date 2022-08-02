import { Container } from 'stylesheet/Container.styled';
import Error from '../../images/Error.jpeg';
import { ErrorContainer, ErrorText, BackToHome } from './Error.styled';

export const ErrorPage = () => {
  return (
    <Container>
      <ErrorText>
        This page does not exist. To return to the home page click on the{' '}
        <BackToHome to="/wallet_frontend/home">Home</BackToHome>
      </ErrorText>

      <ErrorContainer>
        <img src={Error} alt="Ops, something is wrong" />
      </ErrorContainer>
    </Container>
  );
};
