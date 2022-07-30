import { Header } from 'components/Header/Header';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { FormRegistration } from 'components/RegistrationForm/RegistrationForm';
import { DashboardPage } from 'pages/DashboardPage';
import { Container } from 'stylesheet/Container.styled';

export const App = () => {
  return (
    <Container>
      <Header />
      <DashboardPage />
      <FormRegistration />
      <LoginForm />
    </Container>
  );
};
