import { Header } from 'components/Header/Header';
import { DashboardPage } from 'pages/DashboardPage';
import { Container } from 'stylesheet/Container.styled';


export const App = () => {
  return (
    <Container>
      <Header />
      <DashboardPage />
    </Container>
  );
};
