import { Header } from 'components/Header/Header';
import { DashboardPage } from 'pages/DashboardPage';
import { Chart } from 'components/Chart/Chart';
import { Container } from 'stylesheet/Container.styled';

export const App = () => {
  return (
    <Container>
      <Header />
      <DashboardPage />
      <Chart />
    </Container>
  );
};
